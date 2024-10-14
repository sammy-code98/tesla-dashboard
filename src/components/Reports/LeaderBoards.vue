<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <div
            class="px-md-8 py-md-4 bg-white rounded-xl shadow"
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
            <div class="py-md02">
              <GroupCard
                v-for="(group,i) in groupData"
                :key="i"
                :color="group.color"
                :description="group.description"
                :icon="group.icon"
                :position="group.position"
                :title="group.title"
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
  import UserCard from '../Cards/UserCard.vue'
  import GroupCard from '../Cards/GroupCard.vue'
  import { groupData, userData } from '@/staticData'

  export default defineComponent({
    name: 'LeaderBoard',
    components: {
      UserCard,
      GroupCard,
    },
    setup () {
      return {
        userData,
        groupData,
      }
    },
  })
</script>

<style scoped lang="sass">
.shadow
   box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px
</style>
