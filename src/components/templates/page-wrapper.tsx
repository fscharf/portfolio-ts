import Aos from 'aos'
import { Navigator } from 'components/molecules'
import { Navbar } from 'components/organisms'

import React, { FC, memo, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  refs: React.RefObject<HTMLDivElement>[]
}

const PageWrapper: FC<Props> = ({ children, refs }) => {
  const handleScroll = () => {
    Aos.refresh()
  }

  window.addEventListener('scroll', handleScroll)

  useEffect(() => {
    Aos.init({
      duration: 1200
    })
  }, [])

  return (
    <React.Fragment>
      <Navbar refs={refs} />

      <main>{children}</main>

      <Navigator refs={refs} />
    </React.Fragment>
  )
}

export default memo(PageWrapper)
