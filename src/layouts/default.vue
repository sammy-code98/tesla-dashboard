<template>
  <v-responsive>
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="2" lg="2" md="2" style="position: fixed; top: 0; left: 0; height: 100vh;">
              <Sidebar />
            </v-col>
            <v-col cols="12" lg="12" md="12">
              <NavHeader style="position: fixed" />
              <v-container fluid>
                <router-view />
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>

</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import NavHeader from '@/components/Layout/NavHeader.vue'
  import Sidebar from '@/components/Layout/Sidebar.vue'

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Sidebar,
      NavHeader,
    },
    setup () {
      return {}
    },
  })
</script>
