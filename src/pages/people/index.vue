<template>
  <div>
    <v-container>
      <div>
        <div>
          <v-text-field
            v-model="name"
            class="ma-2"
            clearable
            density="compact"
            hide-details
            placeholder="Search by name..."
            variant="outlined"
            @input="handleSearch"
          />
        </div>

        <div class="py-md-12">
          <v-data-table-server
            :headers:any="headers"
            :items="serverItems"
            :items-length="totalItems"
            :loading="loading"
            :server-items-length="totalItems"
            @update:options="loadItems"
          />
        </div>
      </div>
    </v-container>
  </div>

</template>

<script lang="ts">
  import { people } from '@/staticData'
  import { Person, TableI } from '@/types'
  import { defineComponent, reactive, ref } from 'vue'

  const FakeAPI = {
    async fetch ({ page, itemsPerPage, sortBy, search }: TableI & { search: string }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const start = (page - 1) * itemsPerPage
          const end = start + itemsPerPage

          const filteredItems = people.filter(item =>
            search
              ? item.name.toLowerCase().includes(search.toLowerCase())
              : true
          )

          type SortKey = keyof Person;

          if (sortBy.length) {
            const sortKey:SortKey = sortBy[0].key as SortKey
            const sortOrder = sortBy[0].order
            filteredItems.sort((a, b) => {
              const aValue = a[sortKey]
              const bValue = b[sortKey]
              return sortOrder === 'desc' ? (bValue > aValue ? 1 : -1) : (aValue > bValue ? 1 : -1)
            })
          }

          const paginated = filteredItems.slice(start, end)

          resolve({ items: paginated, total: filteredItems.length })
        }, 500)
      })
    },
  }

  export default defineComponent({
    name: 'PeopleTable',

    setup () {
      const itemsPerPage = ref(5)
      const headers = reactive([
        {
          title: 'Name',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Email', key: 'email', align: 'center' },
        { title: 'Position', key: 'position', align: 'center' },
        { title: 'Department', key: 'department', align: 'end' },
        { title: 'Employee No', key: 'employee', align: 'end' },
        { title: 'Status', key: 'status', align: 'end' },
      ])
      const serverItems = ref([])
      const loading = ref(true)
      const totalItems = ref(0)
      const search = ref(' ')
      const name = ref(' ')

      // Function to load items with pagination and sorting
      const loadItems = ({ page, itemsPerPage, sortBy }:TableI) => {
        loading.value = true
        FakeAPI.fetch({ page, itemsPerPage, sortBy, search: search.value }).then(({ items, total }:any) => {
          serverItems.value = items
          totalItems.value = total
          loading.value = false
        })
      }

      const handleSearch = () => {
        search.value = name.value // Update search term when name changes
        loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
      }

      return {
        itemsPerPage,
        headers,
        serverItems,
        loading,
        totalItems,
        loadItems,
        search,
        handleSearch,
        name,
      }
    },
  })
</script>
