import { styled } from 'theme'

const Container = styled('div', {
  maxWidth: '$container',
  margin: '0 auto',
  '@tablet': {
    paddingX: '$xxs'
  }
})

export default Container
