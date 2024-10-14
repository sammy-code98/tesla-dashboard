export interface UserLeaderBoardI {
  name: string;
  avatarSrc: string;
  description: string;
  position: number;
  color: string;
  icon: string;
}
export interface GroupsLeaderBoardI{
  title:string;
  description:string;
  position:number;
  color:string;
  icon:string
}

export type ActivityI = string[]

export interface ActivityCardI {
  timeframes: any;
  people: any;
  topic: string;
  title:string
  value:string
  subValue?:string
  spark?:number[]
}

export interface SelectItemsI {
  title: string;
  value: string;
}

export interface NavigationItem {
  icon: string;
  title: string;
  to: string;
}

export interface TopicsI {
  title: string;
  imageSrc: string;
  progressValue: number;
  bgColor: string;
  progressColor: string;
  score: number;
}

export interface TableI{
  page:number;
  itemsPerPage:number;
  sortBy:any;
}

export interface Person {
  name: string;
  email: string;
  position: string;
  department: string;
  employee: string;
  status: string;
}
