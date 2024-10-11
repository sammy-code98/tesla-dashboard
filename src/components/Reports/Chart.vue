<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-row class="flex-wrap">
            <v-col v-for="i in 6" :key="i" class="d-flex justify-center align-center" cols="4">
              <div class="pa-md-4 bg-white rounded-xl border" style="width: 100%; height: 152.4px;">lol</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <div class="px-md-4 bg-white rounded-xl border" style="height: 100%;">
            <div class="d-flex  justify-space-between align-center">
              <h6 class="text-body-1 font-weight-medium text-grey-darken-1">Activity</h6>
              <v-select
                v-model="selectedActivityPeriod"
                class="select-width font-weight-medium text-grey-darken-1"
                :items="activity"
                return-object
                style="width: 20px"
                variant="plain"
              />
            </div>
            <v-divider class="mt-n4" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'Chart',
    setup () {
      type ActivityI = string[]
      const selectedActivityPeriod = ref('Month')

      const activity:ActivityI = ['Week', 'Month', 'Year']
      return {
        activity,
        selectedActivityPeriod,
      }
    },
  })

</script>
<style scoped lang="sass">
.select-width
   max-width: 90px
</style>
