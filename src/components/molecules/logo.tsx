import { Flex, LogoThumb, Text } from 'components/atoms'
import { memo, useState } from 'react'
import { keyframes, styled } from 'theme'
import { scrollTop } from 'utils'

const slideLeft = keyframes({
  from: {
    transform: 'translateX(100%)'
  },
  to: {
    transform: 'translateX(0)'
  }
})

const Wrapper = styled(Flex, {
  alignItems: 'center',
  p: '$quarck'
})

const Label = styled(Text, {
  fontWeight: '$black',
  fontSize: '$xxs',
  cursor: 'default'
})

const HiddenLabel = styled(Label, {
  display: 'none',
  animation: `${slideLeft} 200ms linear`,
  variants: {
    show: {
      true: {
        display: 'inline-block'
      }
    }
  }
})

const Logo = () => {
  const [show, setShow] = useState<boolean>(true)

  const handleScroll = () =>
    window.scrollY > 200 ? setShow(false) : setShow(true)

  window.addEventListener('scroll', handleScroll)

  return show ? (
    <Wrapper onClick={scrollTop}>
      <Label>f</Label>
      <HiddenLabel show={show}>elipe</HiddenLabel>
      <Label>s</Label>
      <HiddenLabel show={show}>charf</HiddenLabel>
    </Wrapper>
  ) : (
    <LogoThumb onClick={scrollTop} />
  )
}

export default memo(Logo)
