<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-row class="flex-wrap">
            <v-col v-for="(act, i) in filteredActivityData" :key="i" class="d-flex justify-center align-center" cols="4">
              <div style="height: 100%; width: 100%;">
                <div class="px-md-4 py-md-2 bg-white rounded-xl shadow" style="width: 100%; min-height: 202.4px;">
                  <h3 class="text-subtitle-1 text-grey-darken-1 font-weight-regular">{{ act.title }}</h3>
                  <div class="py-md-4">
                    <h2 class="text-black font-weight-bold text-h4">{{ act.value }}<span v-if="act.subValue" class="text-grey-darken-1 text-disabled text-h5">{{ act.subValue }}</span></h2>
                  </div>
                  <div v-if="act.spark" class="pt-md-2">
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
          <div class="px-md-4 bg-white rounded-xl shadow" style="height: 100%;">
            <div class="d-flex justify-space-between align-center">
              <h6 class="text-body-1 font-weight-medium text-grey-darken-1">Activity</h6>
              <v-select
                v-model="selectedActivityPeriod"
                class="select-width font-weight-medium text-grey-darken-1"
                :items="activity"
                style="width: 100px"
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
  import { activityData } from '@/staticData'
  import { computed, defineComponent, PropType, ref, watch } from 'vue'
  import VueApexCharts from 'vue3-apexcharts'

  export default defineComponent({
    name: 'Chart',
    components: {
      apexchart: VueApexCharts,
    },
    props: {
      selectedTime: {
        type: String as PropType<string>,
        required: true,
      },
    },
    setup (props) {
      const selectedActivityPeriod = ref('Month')
      const activity = ['Week', 'Month', 'Year']
      const filteredActivityData = ref([...activityData]) // Initial data set

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

      const series = computed(() => {
        return [
          {
            name: 'Activity',
            data: filteredActivityData.value.map(act => parseInt(act.value.replace(/[^0-9]/g, ''))), // Extract numerical value for the series data
          },
        ]
      })

      watch(
        () => [props.selectedTime, selectedActivityPeriod.value], // Watch for both selectedTime and selectedActivityPeriod
        ([newSelectedTime]) => {
          // Update the filtered activity data based on the selected time frame
          filteredActivityData.value = activityData.map(act => {
            const timeframeData = act.timeframes[newSelectedTime.toLowerCase()]
            return {
              ...act,
              value: timeframeData ? timeframeData.value : act.value,
              subValue: timeframeData && timeframeData.subValue ? timeframeData.subValue : act.subValue,
            }
          })
        },
        { immediate: true }
      )

      return {
        activity,
        selectedActivityPeriod,
        chartOptions,
        series,
        filteredActivityData,
      }
    },
  })
</script>

<style scoped lang="sass">
.select-width
   max-width: 90px

.shadow
   box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px

</style>
