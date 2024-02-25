type Handler = (id: number | string) => void

export type FAQ = {
  id: number
  activeFaq?: number | undefined
  handleFaqToggle?: Handler | undefined
  quest: string | React.JSX.Element
  ans: string | React.JSX.Element
}
