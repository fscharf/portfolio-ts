import { Text } from 'components/atoms'
import { FC, memo } from 'react'
import { styled } from 'theme'

type Props = typeof Text['defaultProps']

const Wrapper = styled(Text, 'h2', {
  position: 'relative',
  width: 'max-content',
  cursor: 'default',
  '&:hover:after': {
    width: '100%'
  },
  '&:after': {
    transition: ' all 200ms',
    content: '',
    height: '20px',
    width: '60%',
    position: 'absolute',
    bottom: 0,
    right: '-24px',
    background: '$primary',
    zIndex: -1
  }
})

const Title: FC<Props> = ({ ...props }) => {
  return (
    <Wrapper weight="black" size="md" {...props}>
      {props.children}
    </Wrapper>
  )
}

export default memo(Title)
