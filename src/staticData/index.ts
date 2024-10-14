import { ActivityCardI, GroupsLeaderBoardI, NavigationItem, Person, SelectItemsI, TopicsI, UserLeaderBoardI } from '@/types'

export const userData: UserLeaderBoardI[] = [
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

export const groupData:GroupsLeaderBoardI[] = [
  {
    title: 'Houston Facility',
    description: '52 Points / User - 97% Correct',
    position: 1,
    color: 'success',
    icon: 'mdi-menu-up',
  },
  {
    title: 'Test Group',
    description: '52 Points / User - 95% Correct',
    position: 2,
    color: 'error',
    icon: 'mdi-menu-down',
  },
  {
    title: 'Sales Leadership',
    description: '52 Points / User -  87% Correct',
    position: 3,
    color: 'success',
    icon: 'mdi-menu-up',
  },
  {
    title: 'Northeast Region',
    description: '52 Points / User',
    position: 4,
    color: 'success',
    icon: 'mdi-menu-up',
  },
]

export const activityData:ActivityCardI[] = [
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

export const timeFrame: SelectItemsI[] = [
  { title: 'Last 7 Days', value: 'Last 7 Days' },
  { title: 'This Month ', value: 'This Month' },
  { title: 'This Year ', value: 'This Year ' },
  { title: 'Custom ', value: 'Custom ' },
]

export const topics: SelectItemsI[] = [
  { title: 'All', value: 'All' },
  { title: 'Food Safety ', value: 'Food Safety' },
  { title: 'Covid Protocols  ', value: 'Covid Protocols  ' },
  { title: 'Social Media Policies ', value: 'Social Media Policies ' },
]

export const items: NavigationItem[] = [
  { title: 'Reports', icon: 'mdi-trending-up', to: '/' },
  { title: 'Library', icon: 'mdi-lightning-bolt', to: '/library' },
  {
    title: 'People',
    icon: 'mdi-account-multiple-outline',
    to: '/people',
  },
  { title: 'Activities', icon: 'mdi-clipboard-text', to: '/activities' },
]

export const supportItems: NavigationItem[] = [
  { title: 'Get Started', icon: 'mdi-lightbulb-variant', to: '/get-started' },
  { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]

export const weekestTopics: TopicsI[] = [
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

export const strongesTopics: TopicsI[] = [
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

export const people:Person[] = [
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
