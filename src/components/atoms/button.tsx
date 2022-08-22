import { FC } from 'react'
import { styled } from 'theme'

const Wrapper = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$nano',
  fontSize: '$xxxs',
  color: '$light',
  borderRadius: '$nano',
  fontWeight: '$black',
  '&:hover': {
    opacity: '0.6'
  },
  variants: {
    variant: {
      default: {
        color: '$primary'
      },
      primary: {
        backgroundColor: '$primary',
        color: '$light',
        '&:hover': {
          backgroundColor: '$primary600'
        }
      }
    },
    size: {
      sm: {
        px: '$xxs',
        py: '$xxxs'
      },
      md: {
        fontSize: '$xs',
        px: '$xs',
        py: '$xxs'
      },
      lg: {
        fontSize: '$md',
        px: '$sm',
        py: '$md'
      }
    },
    border: {
      pill: {
        borderRadius: '$xs'
      }
    }
  }
})

type Props = {
  icon?: React.ReactNode
} & typeof Wrapper['defaultProps']

const Button: FC<Props> = ({ icon, ...props }) => {
  return (
    <Wrapper {...props}>
      {props.children} {icon || null}
    </Wrapper>
  )
}

export default Button
