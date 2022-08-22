import { styled } from 'theme'

const Text = styled('span', {
  color: '$light',
  fontSize: '$xxxs',
  wordSpacing: 1,
  variants: {
    size: {
      xs: {
        fontSize: '$nano'
      },
      sm: {
        fontSize: '$xxs'
      },
      md: {
        fontSize: '$sm'
      },
      lg: {
        fontSize: '$md'
      },
      xl: {
        fontSize: '$xl'
      }
    },
    weight: {
      bold: {
        fontWeight: '$bold'
      },
      black: {
        fontWeight: '$black'
      }
    },
    color: {
      primary: {
        color: '$primary'
      },
      'light-darkest': {
        color: '$light-darkest'
      },
      light: {
        color: '$light'
      },
      'dark-lightest': {
        color: '$dark-lightest'
      }
    },
    variant: {
      secondary: {
        fontFamily: '$secondary'
      }
    }
  }
})

export default Text
