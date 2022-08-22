export const scrollTo = <T extends HTMLDivElement | null>(element: T): void => {
  if (element === null) return

  return window.scrollTo(0, element.offsetTop)
}

export const scrollTop = () => {
  return window.scrollTo(0, 0)
}
