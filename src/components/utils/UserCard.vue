<template>
  <div class="d-flex justify-space-between align-center ga-4 py-md-3 cursor-pointer">
    <div class="d-flex ga-4">
      <v-avatar
        :image="props.avatarSrc"
        size="50"
      />
      <div>
        <h3 class="text-black text-subtitle-1 font-weight-bold">{{ props.name }}</h3>
        <p class="text-grey-darken-1">{{ props.description }}</p>
      </div>
    </div>
    <div>
      <div class="d-flex align-center ga-2">
        <h3 class="text-black text-subtitle-2 font-weight-bold">{{ props.position }}</h3>
        <v-icon :color="props.color" :icon="props.icon" size="large" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  interface Props{
    name:string
    avatarSrc:string
    description:string
    position:number
    color:string
    icon:string
  }

  const props = defineProps<Props>()
</script>
