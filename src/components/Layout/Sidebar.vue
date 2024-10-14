<template>
  <v-navigation-drawer class="pa-md-8 elevation-1 rounded-e-xl" permanent>
    <div>
      <v-img class="mb-4" height="25" src="@/assets/logo.svg" />
    </div>
    <v-list class="py-md-6" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        active-class="active-link"
        class="py-md-3 px-md-6 hover-link"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.to"
        :value="item.title"
      />
    </v-list>
    <div class="py-md-6">
      <h2 class="text-h6 font-weight-bold px-md-6">Support</h2>
      <div class="pt-md-2">
        <v-list class="py-md-2" density="compact" nav>
          <v-list-item
            v-for="(item, i) in supportItems"
            :key="i"
            active-class="active-link"
            class="py-md-3 px-md-6 hover-link"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.to"
            :value="item.title"
          />
        </v-list>
      </div>
    </div>
    <div class="absolute-bottom">
      <v-divider />
      <div class="py-md-3">
        <v-avatar
          image="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size="40"
        />

        <div class="py-md-2 gap-2">
          <h4 class="text-subtitle-2 font-weight-bold">Sam Wheeler</h4>
          <p class="text-body-2 font-weight-light">samwheeler@example.com</p>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { items, supportItems } from '@/staticData'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Sidebar',
    setup () {
      return { items, supportItems }
    },
  })
</script>

<style scoped lang="scss">
.v-navigation-drawer {
  position: relative;
}
.absolute-bottom {
  position: absolute;
  bottom: 0;
  width: 80%;
}

.active-link {
  color: #1b59f8 !important;
  font-weight: bold !important;
}
.hover-link:hover {
  color: #1b59f8 !important;
}
</style>
