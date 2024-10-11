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
                User Leaderboard
              </h6>
            </div>
            <div class="py-md-2">
              <UserCard
                v-for="(user,i) in userData"
                :key="i"
                :avatar-src="user.avatarSrc"
                :color="user.color"
                :description="user.description"
                :icon="user.icon"
                :name="user.name"
                :position="user.position"
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
                Groups Leaderboard
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import UserCard from '../utils/UserCard.vue'

  interface UserLeaderBoardI {
    name: string;
    avatarSrc: string;
    description: string;
    position: number;
    color: string;
    icon: string;
  }

  const userData: UserLeaderBoardI[] = [
    {
      name: 'Jesse Thomas',
      avatarSrc: 'https://picsum.photos/500/300?image=50',
      description: '637 Points - 98% Correct',
      position: 1,
      color: 'success',
      icon: 'mdi-menu-up',
    },
    {
      name: 'Thisal Mathiyazhagan',
      avatarSrc: 'https://picsum.photos/500/300?image=55',
      description: '637 Points - 89% Correct ',
      position: 2,
      color: 'error',
      icon: 'mdi-menu-down',
    },
    {
      name: 'Helen Chuang',
      avatarSrc: 'https://picsum.photos/500/300?image=53',
      description: '637 Points - 88% Correct',
      position: 3,
      color: 'success',
      icon: 'mdi-menu-up',
    },
    {
      name: 'Lura Silverman',
      avatarSrc: 'https://picsum.photos/500/300?image=51',
      description: '637 Points',
      position: 4,
      color: 'success',
      icon: 'mdi-menu-up',
    },
  ]

  export default defineComponent({
    name: 'LeaderBoard',
    components: {
      UserCard,
    },
    setup () {
      return {
        userData,
      }
    },
  })
</script>
