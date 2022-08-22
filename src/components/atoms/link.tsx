import { styled } from 'theme'

const Link = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$dark',
  fontSize: '$xxs',
  cursor: 'pointer',
  transition: '400ms ease-in',
  variants: {
    active: {
      true: {
        color: '$primary'
      }
    }
  },
  '&:hover': {
    color: '$primary'
  }
})

export default Link
