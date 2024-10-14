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
            :headers="headers"
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
  import { defineComponent, reactive, ref } from 'vue'

  interface TableI{
    page:number;
    itemsPerPage:number;
    sortBy:any;
  }

  const people = [
    {
      name: 'Samuel Uzor',
      email: 'ugosammy98@gmail.com',
      position: 'Frontend Developer',
      department: 'Engineering',
      employee: 'TES0032',
      status: 'Active',
    },
    {
      name: 'Isabella Garcia',
      email: 'garcia@bella.com',
      position: 'Marketing Manager',
      department: 'Marketing',
      employee: 'MKTG0001',
      status: 'On Leave',
    },
    {
      name: 'Omar Khan',
      email: 'omar999@yahoo.com',
      position: 'Backend Developer',
      department: 'Engineering',
      employee: 'ENG0024',
      status: 'Active',
    },
    {
      name: 'Li Chen',
      email: 'chenli@rams.com',
      position: 'Financial Analyst',
      department: 'Finance',
      employee: 'FIN0019',
      status: 'Active',
    },
    {
      name: 'Aisha Diallo',
      email: 'aisha@buhari.com',
      position: 'Sales Representative',
      department: 'Sales',
      employee: 'SAL0078',
      status: 'On Leave',
    },
    {
      name: 'David Miller',
      email: 'dave@miller23.com',
      position: 'Project Manager',
      department: 'Project Management',
      employee: 'PM0045',
      status: 'On Leave',
    },
    {
      name: 'Elena Petrova',
      email: 'elena@pet.com',
      position: 'UX Designer',
      department: 'Design',
      employee: 'DES0011',
      status: 'Active',
    },
    {
      name: 'Katsuro Tanaka',
      email: '[email address removed]',
      position: 'Software Engineer',
      department: 'Engineering',
      employee: 'ENG0037',
      status: 'Active',
    },
    {
      name: 'Maria Lopez',
      email: 'lopez@gmail.com',
      position: 'Customer Success Manager',
      department: 'Customer Success',
      employee: 'CSM0009',
      status: 'Active',
    },
    {
      name: 'Ahmed Hassan',
      email: 'ahmed@test.com',
      position: 'Data Scientist',
      department: 'Data Science',
      employee: 'DS0021',
      status: 'Active',
    },
    {
      name: 'Chloe Bennett',
      email: 'bennet@trappy.com',
      position: 'Human Resources Specialist',
      department: 'Human Resources',
      employee: 'HR0052',
      status: 'Active',
    },
    {
      name: 'Olivia Lee',
      email: 'lee@china.gov',
      position: 'Content Writer',
      department: 'Marketing',
      employee: 'MKTG0002',
      status: 'Active',
    },
    {
      name: 'Daniel Kim',
      email: 'kim@eng.com',
      position: 'Full Stack Developer',
      department: 'Engineering',
      employee: 'ENG0025',
      status: 'Active',
    },
    {
      name: 'Sophia Wang',
      email: 'wang@fin.com',
      position: 'Accountant',
      department: 'Finance',
      employee: 'FIN0020',
      status: 'Active',
    },
    {
      name: 'Benjamin Brown',
      email: 'ben@brown.com',
      position: 'Sales Manager',
      department: 'Sales',
      employee: 'SAL0079',
      status: 'Active',
    },
    {
      name: 'Emily Davis',
      email: 'davies332@emi.com',
      position: 'Product Manager',
      department: 'Product Management',
      employee: 'PM0046',
      status: 'Active',
    },
    {
      name: 'Ava Johnson',
      email: 'ava@hjohn.com',
      position: 'Graphic Designer',
      department: 'Design',
      employee: 'DES0012',
      status: 'Active',
    },
    {
      name: 'Ethan Carter',
      email: 'carter@system.admin',
      position: 'System Administrator',
      department: 'IT',
      employee: 'IT0038',
      status: 'Active',
    },
    {
      name: 'Lily Wilson',
      email: 'lil@332.com',
      position: 'Customer Support Representative',
      department: 'Customer Success',
      employee: 'CSM0010',
      status: 'Active',
    },
    {
      name: 'Noah Jones',
      email: 'jones@liverpool.amad',
      position: 'Business Analyst',
      department: 'Data Science',
      employee: 'DS0022',
      status: 'Active',
    },

  ]

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

          if (sortBy.length) {
            const sortKey = sortBy[0].key
            const sortOrder = sortBy[0].order
            filteredItems.sort((a, b) => {
              const aValue = a[sortKey]
              const bValue = b[sortKey]
              return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
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
