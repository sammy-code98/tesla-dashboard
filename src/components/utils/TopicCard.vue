<template>
  <div class="d-flex justify-space-between align-center ga-4 py-md-3">
    <div class="d-flex ga-4">
      <v-img
        aspect-ratio="16/9"
        cover
        rounded="lg"
        :src="props.imageSrc"
        :width="70"
      />
      <div>
        <h3 class="text-black text-subtitle-2 font-weight-bold">{{ props.title }}</h3>
        <v-progress-linear
          :bg-color="props.bgColor"
          class="mt-2"
          :color="props.progressColor"
          :height="10"
          :model-value="props.progressValue"
          rounded="xl"
          style="width: 450px;"
        />
      </div>
    </div>

    <div class="mt-4">
      <h3 class="text-subtitle-2 font-weight-semibold">{{ props.score }}% <span class="text-grey-darken-1 text-disabled">Correct</span></h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  interface Props {
    title: string
    imageSrc: string
    progressValue: number
    bgColor: string
    progressColor: string
    score: number
  }

  const props = defineProps<Props>()

</script>
