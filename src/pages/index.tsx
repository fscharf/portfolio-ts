import { Home, Skills } from 'components/pages/home'
import { memo, useRef } from 'react'

import 'aos/dist/aos.css'
import PageWrapper from 'components/templates/page-wrapper'

const Main = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const refs = [homeRef, skillsRef]

  return (
    <PageWrapper refs={refs}>
      <Home ref={homeRef} scrollRef={skillsRef} />
      <Skills ref={skillsRef} />
    </PageWrapper>
  )
}

export default memo(Main)
