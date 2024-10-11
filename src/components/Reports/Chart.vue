<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-row class="flex-wrap">
            <v-col v-for="(act,i) in activityData" :key="i" class="d-flex justify-center align-center" cols="4">
              <div style="height: 100%; width: 100%;">
                <div class="px-md-4 py-md-2  bg-white rounded-xl border" style="width: 100%; min-height: 202.4px;">
                  <h3 class="text-subtitle-1 text-grey-darken-1 font-weight-regular">{{ act.title }}</h3>
                  <div class="py-md-4">
                    <h2 class="text-black font-weight-bold text-h4">{{ act.value }}<span class="text-grey-darken-1 text-disabled text-h5">{{ act.subValue }}</span></h2>
                  </div>
                  <div class="pt-md-2">
                    <v-sparkline
                      auto-draw
                      color="#1B59F8"
                      height="100"
                      line-width="2"
                      :model-value="act.spark"
                      padding="24"
                      smooth
                      stroke-linecap="round"
                    />
                  </div>
                </div>
              </div>
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
            <div class="py-1">
              <apexchart height="350" :options="chartOptions" :series="series" type="bar" />
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'

  export default defineComponent({
    name: 'Chart',
    components: {
      apexchart: VueApexCharts,
    },
    setup () {
      type ActivityI = string[]
      const selectedActivityPeriod = ref('Month')

      const activity:ActivityI = ['Week', 'Month', 'Year']

      interface ActivityCardI {
        title:string
        value:string
        subValue?:string
        spark?:number[]
      }

      const activityData:ActivityCardI[] = [
        {
          title: 'Active Users',
          value: '27',
          subValue: '/80',
        },
        { title: 'Questions Answered', value: '3,298' },
        { title: 'Av. Session Length', value: '2m 34s' },
        {
          title: 'Starting Knowledge',
          value: '64%',
          spark: [0, 1, 8, 2, 9, 12, 15],
        },
        {
          title: 'Current Knowledge',
          value: '86%',
          spark: [0, 12, 5, 9, 5, 10, 3],
        },
        {
          title: 'Knowledge Gain',
          value: '+34%',
          spark: [0, 1, 2, 2, 9, 3, 20],
        },

      ]

      const chartOptions = ref({
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: '24%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        },
      })
      const series = ref([
        {
          name: 'Activity',
          data: [100, 150, 200, 240, 300, 101, 350, 320, 125, 333, 380, 400],
          fill: {
            type: 'linear-gradient',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(27, 89, 248, 0.8)',
                opacity: 1,

              },
              {
                offset: 1,
                color: 'rgba(27, 89, 248, 0)',
                opacity: 1,
              },
            ],
          },
        },
      ])

      return {
        activity,
        selectedActivityPeriod,
        chartOptions,
        series,
        activityData,
      }
    },
  })

</script>
<style scoped lang="sass">
.select-width
   max-width: 90px
</style>
