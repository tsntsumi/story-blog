export type Menu = {
  id: number
  title: string
  path?: string
  newTab: boolean
  attributes?: string
  submenu?: Menu[]
}
