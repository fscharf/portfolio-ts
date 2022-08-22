import React, { useState } from 'react'

export const useRefsHandler = (refs: React.RefObject<HTMLDivElement>[]) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleRefs = () => {
    refs.forEach((ref, index) => {
      if (ref.current !== null) {
        const { offsetTop, offsetHeight } = ref.current

        const isCurrentSection = offsetTop <= window.scrollY + offsetHeight

        if (isCurrentSection) setActiveIndex(index)
      }
    })
  }

  window.addEventListener('scroll', () => {
    const timeout = setTimeout(() => {
      handleRefs()
    }, 200)

    return () => clearTimeout(timeout)
  })

  return { activeIndex, setActiveIndex }
}
