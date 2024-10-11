<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div
            class="px-md-8 py-md-4 bg-white rounded-xl border"
            style="height: 100%"
          >
            <div>
              <h6 class="text-body-1 font-weight-medium text-grey-darken-1">
                Weakest Topics
              </h6>
            </div>
            <div class="py-md-2">
              <TopicCard
                v-for="(weak, i) in weekestTopics"
                :key="i"
                :bg-color="weak.bgColor"
                :image-src="weak.imageSrc"
                :progress-color="weak.progressColor"
                :progress-value="weak.progressValue"
                :score="weak.score"
                :title="weak.title"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div
            class="px-md-8 py-md-4 bg-white rounded-xl border"
            style="height: 100%"
          >
            <div>
              <h6 class="text-body-1 font-weight-medium text-grey-darken-1">
                Strongest Topics
              </h6>
            </div>
            <div class="py-md-2">
              <TopicCard
                v-for="(strong, i) in strongesTopics"
                :key="i"
                :bg-color="strong.bgColor"
                :image-src="strong.imageSrc"
                :progress-color="strong.progressColor"
                :progress-value="strong.progressValue"
                :score="strong.score"
                :title="strong.title"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TopicCard from '../Cards/TopicCard.vue'

  interface TopicsI {
    title: string;
    imageSrc: string;
    progressValue: number;
    bgColor: string;
    progressColor: string;
    score: number;
  }

  const weekestTopics: TopicsI[] = [
    {
      title: 'Food Safety',
      imageSrc: 'https://picsum.photos/500/300?image=50',
      progressValue: 70,
      bgColor: 'pink-lighten-3',
      progressColor: '#FFBF1A',
      score: 70,
    },
    {
      title: 'Compliance Basics Procedures ',
      imageSrc: 'https://picsum.photos/500/300?image=55',
      progressValue: 52,
      bgColor: 'pink-lighten-3',
      progressColor: '#FFBF1A',
      score: 52,
    },
    {
      title: 'Company Networking',
      imageSrc: 'https://picsum.photos/500/300?image=15',
      progressValue: 36,
      bgColor: 'pink-lighten-3',
      progressColor: '#FFBF1A',
      score: 36,
    },
  ]

  const strongesTopics: TopicsI[] = [
    {
      title: 'Covid Protocols',
      imageSrc: 'https://picsum.photos/500/300?image=50',
      progressValue: 95,
      bgColor: '#B9F6CA',
      progressColor: '#2FEA9B',
      score: 95,
    },
    {
      title: 'Cyber Security Basics ',
      imageSrc: 'https://picsum.photos/500/300?image=15',
      progressValue: 50,
      bgColor: '#B9F6CA',
      progressColor: '#2FEA9B',
      score: 92,
    },
    {
      title: 'Social Media Policies',
      imageSrc: 'https://picsum.photos/500/300?image=55',
      progressValue: 89,
      bgColor: '#B9F6CA',
      progressColor: '#2FEA9B',
      score: 89,
    },
  ]

  export default defineComponent({
    name: 'Topics',
    components: {
      TopicCard,
    },
    setup () {
      return {
        weekestTopics,
        strongesTopics,
      }
    },
  })
</script>
