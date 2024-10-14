<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <div>
            <v-select
              v-model="selectedTime"
              item-title="title"
              item-value="value"
              :items="timeFrame"
              rounded="xl"
              variant="outlined"
            >
              <template #selection>
                <p class="font-weight-medium text-grey-darken-1">
                  Timeframe:
                  <span class="text-black">{{ selectedTime }}</span>
                </p>
              </template>
            </v-select>
          </div>
        </v-col>

        <v-col cols="4">
          <div>
            <v-select
              v-model="selectedPeople"
              item-title="title"
              item-value="value"
              :items="peopleOptions"
              rounded="xl"
              variant="outlined"
            >
              <template #selection>
                <p class="font-weight-medium text-grey-darken-1">
                  People:
                  <span class="text-black">{{ selectedPeople }}</span>
                </p>
              </template>
            </v-select>
          </div>
        </v-col>

        <v-col cols="4">
          <div>
            <v-select
              v-model="selectedTopic"
              item-title="title"
              item-value="value"
              :items="topics"
              rounded="xl"
              variant="outlined"
            >
              <template #selection>
                <p class="font-weight-medium text-grey-darken-1">
                  Topic:
                  <span class="text-black">{{ selectedTopic }}</span>
                </p>
              </template>
            </v-select>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Chart :people="selectedPeople" :selected-time="selectedTime" :topic="selectedTopic" />
    <Topics />
    <LeaderBoards />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Chart from '@/components/Reports/Chart.vue'
  import Topics from '@/components/Reports/Topics.vue'
  import LeaderBoards from '@/components/Reports/LeaderBoards.vue'
  import { peopleOptions, timeFrame, topics } from '@/staticData'

  export default defineComponent({
    name: 'Reports',
    components: {
      Chart,
      Topics,
      LeaderBoards,
    },
    setup () {
      const selectedTime = ref('Month')
      const selectedTopic = ref('All')
      const selectedPeople = ref('All')

      return {
        timeFrame,
        selectedTime,
        topics,
        selectedTopic,
        selectedPeople,
        peopleOptions,
      }
    },
  })
</script>

<style scoped lang="scss">
.custom-select .v-input__control{
  box-shadow: none !important;
  border-color: transparent !important;
}
</style>
