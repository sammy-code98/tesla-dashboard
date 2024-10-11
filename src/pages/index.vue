<template>
  <div class="py-md-1">
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
                <p>
                  Timeframe:
                  <span class="font-weight-bold">{{ selectedTime }}</span>
                </p>
              </template>
            </v-select>
          </div>
        </v-col>

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
                <p>
                  People:
                  <span class="font-weight-bold">{{ selectedTime }}</span>
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
                <p>
                  Timeframe:
                  <span class="font-weight-bold">{{ selectedTopic }}</span>
                </p>
              </template>
            </v-select>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
//
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'Reports',
    setup () {
      interface SelectItemsI {
        title: string;
        value: string;
      }
      const selectedTime = ref('Last 7 Days')
      const selectedTopic = ref('All')

      const timeFrame: SelectItemsI[] = [
        { title: 'Last 7 Days', value: 'Last 7 Days' },
        { title: 'This Month ', value: 'This Month' },
        { title: 'This Year ', value: 'This Year ' },
        { title: 'Custom ', value: 'Custom ' },
      ]

      const topics: SelectItemsI[] = [
        { title: 'All', value: 'All' },
        { title: 'Food Safety ', value: 'Food Safety' },
        { title: 'Covid Protocols  ', value: 'Covid Protocols  ' },
        { title: 'Social Media Policies ', value: 'Social Media Policies ' },
      ]

      return {
        timeFrame,
        selectedTime,
        topics,
        selectedTopic,
      }
    },
  })
</script>

<style scoped>
.custom-select .v-input__control {
  box-shadow: none !important;
  border-color: transparent !important; /* Remove focus border */
}
</style>
