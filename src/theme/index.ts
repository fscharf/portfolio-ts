import { createStitches } from '@stitches/react'
import { rgba } from 'utils'
import { colors } from './colors'
import { fonts, fontSizes, fontWeights } from './fonts'
import { presetsKeys, themePresets } from './presets'
import { radii } from './radii'
import { shadows } from './shadows'
import { sizes } from './sizes'
import { space } from './space'
import { utils } from './utils'

export * from './presets'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    space,
    radii,
    shadows
  },
  media: {
    desktop: '(min-width: 1024px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 480px)'
  },
  utils
})

export const dynamicTheme = (color = '') => {
  return createTheme({
    colors: {
      primary: color,
      primary600: rgba(color, 0.6)
    }
  }).className
}

export const getTheme = () => {
  return presetsKeys.reduce((object, name) => {
    return {
      ...object,
      [name]: dynamicTheme(themePresets.get(name))
    }
  }, {})
}

export const globalStyles = globalCss({
  '@import': [
    'url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Plus+Jakarta+Sans:wght@400;700;800&display=swap")'
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 0,
    fontFamily: '$default, Segoe UI',
    fontWeight: '$regular',
    wordWrap: 'break-word',
    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
      width: '12px',
      '&-track': {
        backgroundColor: '$dark'
      },
      '&-thumb': {
        px: '$nano',
        borderRadius: '$md',
        backgroundColor: '$light600',
        border: '3px solid $dark',
        '&:hover': {
          backgroundColor: '$light',
          border: 'none'
        }
      }
    }
  },
  body: {
    backgroundColor: '$dark'
  },
  'button, input, select': {
    border: 0,
    backgroundColor: 'unset'
  },
  a: {
    textDecoration: 'none',
    color: 'unset',
    '&:focus, &:active': {
      color: 'unset'
    }
  },
  strong: {
    fontWeight: '$bold'
  }
})

export const animations = {
  swing: keyframes({
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(8px)' },
    '100%': { transform: 'translateY(0)' }
  }),
  rotate: (value: string | number = '360') =>
    keyframes({
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: `rotate(${value}deg)` }
    }),
  showUp: keyframes({
    from: {
      transform: 'scale(0)'
    },
    to: {
      transform: 'scale(1)'
    }
  })
}
