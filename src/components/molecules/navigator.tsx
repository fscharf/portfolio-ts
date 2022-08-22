import { useRefsHandler } from 'hooks'
import React, { FC, memo } from 'react'
import { keyframes, styled } from 'theme'
import { scrollTo } from 'utils'

type Props = {
  refs: React.RefObject<HTMLDivElement>[]
}

export const Wrapper = styled('aside', {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  height: '100vh'
})

export const List = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: '$xxs',
  gap: '$nano'
})

export const ListItem = styled('li', {
  width: '32px'
})

export const activate = keyframes({
  '0%': { transform: 'scale(1) rotate(0)' },
  '100%': { transform: 'scale(1.5) rotate(45deg)' }
})

export const Button = styled('button', {
  height: '14px',
  width: '14px',
  borderRadius: '$quarck',
  border: '3px solid $light',
  variants: {
    active: {
      true: {
        backgroundColor: '$light',
        animation: `${activate} 500ms`,
        transform: 'scale(1.5) rotate(45deg)',
        transition: 'transform 200ms ease-in'
      }
    }
  }
})

const Navigator: FC<Props> = ({ refs }) => {
  const { activeIndex, setActiveIndex } = useRefsHandler(refs)

  return window.innerWidth >= 1024 ? (
    <Wrapper>
      <List>
        {refs &&
          refs.map((ref, index) => {
            const isActiveIndex = activeIndex === index

            return (
              <ListItem
                key={Math.random()}
                onClick={() => {
                  setActiveIndex(index)
                  scrollTo(ref.current)
                }}
              >
                <Button active={isActiveIndex} />
              </ListItem>
            )
          })}
      </List>
    </Wrapper>
  ) : null
}

export default memo(Navigator)
