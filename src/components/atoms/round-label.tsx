import { styled } from 'theme'

export const RoundLabelWrapper = styled('button', {
  display: 'flex',
  width: '$xs',
  height: '$xs',
  borderRadius: '$circle',
  padding: '$quarck',
  variants: {
    active: {
      true: {
        border: '2px solid $light'
      }
    }
  }
})

const RoundLabel = styled('span', {
  width: '100%',
  height: '100%',
  borderRadius: '$circle'
})

export default RoundLabel
