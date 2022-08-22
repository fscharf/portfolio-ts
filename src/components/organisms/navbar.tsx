import { Button, Container, Flex } from 'components/atoms'
import { Logo } from 'components/molecules'
import { Settings } from 'components/organisms'
import { useRefsHandler, useSidebar, useTranslate } from 'hooks'
import { FC, memo, useState } from 'react'
import { HiOutlineCog } from 'react-icons/hi'
import { styled } from 'theme'
import { scrollTo } from 'utils'

type Props = {
  refs: React.RefObject<HTMLDivElement>[]
}

const Header = styled('header', {
  position: 'fixed',
  inset: 0,
  bottom: 'unset',
  zIndex: 990,
  transition: 'all 400ms',
  variants: {
    active: {
      true: {
        background: '$black600',
        backdropFilter: 'blur(5px)'
      }
    }
  }
})

const Nav = styled(Flex, Container, {
  py: '$xxxs',
  justifyContent: 'space-between',
  '@mobile': {
    px: '$xxxs'
  }
})

const NavLink = styled(Button, {
  color: '$light600',
  borderRadius: 'unset',
  py: 'auto',
  height: '100%',
  '&:hover': {
    color: '$light',
    opacity: 'unset'
  },
  variants: {
    active: {
      true: {
        color: '$light'
      }
    }
  }
})

const Navbar: FC<Props> = ({ refs }) => {
  const { translate } = useTranslate()
  const { activeIndex, setActiveIndex } = useRefsHandler(refs)
  const { sidebarRef, handleOpenSidebar } = useSidebar()

  const [isActive, setIsActive] = useState<boolean>(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) return setIsActive(true)
    setIsActive(false)
  })

  const links = [
    translate('navbar.home'),
    translate('navbar.skills'),
    translate('navbar.experiences'),
    translate('navbar.projects')
  ]

  const handleClick = (index: number) => {
    setActiveIndex(index)
    scrollTo(refs[index].current)
  }

  return (
    <>
      <Header active={isActive}>
        <Nav as="nav">
          <Logo />
          <Flex css={{ gap: '$xxxs' }}>
            {links.map((link, index) => {
              return (
                <NavLink
                  onClick={() => handleClick(index)}
                  active={index === activeIndex}
                  key={Math.random()}
                >
                  {link}
                </NavLink>
              )
            })}
          </Flex>
          <Button onClick={handleOpenSidebar}>
            <HiOutlineCog size="32px" />
          </Button>
        </Nav>
      </Header>
      <Settings ref={sidebarRef} />
    </>
  )
}

export default memo(Navbar)
