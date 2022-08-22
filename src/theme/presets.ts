import { colors } from './colors'

export const themePresets = new Map<string, string>([
  ['default', colors.primary],
  ['purple', '#8932fa'],
  ['red', '#f20727'],
  ['green', '#43a82f'],
  ['pink', '#e639c0'],
  ['cyan', '#32c8ee'],
  ['yellow', '#fade07']
])

export const presetsKeys = [...themePresets.keys()]
export const presets = [...themePresets]
