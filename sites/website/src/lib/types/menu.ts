type Handler = () => boolean

export type Menu = {
  id: number | string
  title: string | React.JSX.Element
  path?: string | undefined
  newTab: boolean
  onClick?: Handler | undefined
  submenu?: Menu[] | undefined
}
