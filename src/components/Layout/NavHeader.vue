<template>
  <v-app-bar class="border-b-sm" :elevation="0">
    <v-toolbar-title class="text-h5 font-weight-bold">{{
      title
    }}</v-toolbar-title>
    <v-spacer />
    <v-btn class="text-capitalize" prepend-icon="mdi-download" variant="plain">
      Download
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    name: 'NavHeader',

    setup () {
      const route = useRoute()
      const title = ref(formatTitleFromRoute(route))

      // Watch for changes in the route and update the title
      watch(route, newRoute => {
        title.value = formatTitleFromRoute(newRoute)
      })

      // Function to set and format title based on the route
      function formatTitleFromRoute (route: any): string {
        if (route.path === '/') {
          return 'Reports' // Display 'Reports' if the route is '/'
        }

        // Remove leading/trailing slashes and capitalize the first letter of the title
        const formattedTitle = route.path
          .replace(/^\/|\/$/g, '')
          .split('/')
          .pop()
        return formattedTitle ? capitalize(formattedTitle) : 'Reports'
      }

      // Function to capitalize the first letter
      function capitalize (str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }

      return {
        title,
      }
    },
  })
</script>
