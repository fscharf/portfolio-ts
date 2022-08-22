import { styled } from 'theme'

const Flex = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  variants: {
    direction: {
      column: {
        flexDirection: 'column'
      },
      'column-reverse': {
        flexDirection: 'column-reverse'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      }
    },
    align: {
      center: {
        alignItems: 'center'
      },
      start: {
        alignItems: 'flex-start'
      },
      end: {
        alignItems: 'flex-end'
      }
    },
    justify: {
      between: {
        justifyContent: 'space-between'
      },
      center: {
        justifyContent: 'center'
      },
      start: {
        justifyContent: 'flex-start'
      },
      end: {
        justifyContent: 'flex-end'
      }
    },
    stretch: {
      true: {
        flex: 1
      }
    }
  }
})

export default Flex
