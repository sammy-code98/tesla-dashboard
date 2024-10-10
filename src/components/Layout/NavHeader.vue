<template>
  <v-app-bar class="" :elevation="0">
    <v-toolbar-title class="text-h5 font-weight-bold">Reports</v-toolbar-title>
    <v-spacer />
    <v-btn class="text-capitalize" prepend-icon="mdi-download" variant="plain">
      Download
    </v-btn>
  </v-app-bar>
  <v-divider class="mt-n6" />
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'NavHeader',
  })
</script>
