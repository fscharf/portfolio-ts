import { PropertyValue } from '@stitches/react'

export const utils = {
  marginX: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  paddingX: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  px: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  translateX: (value: PropertyValue<'width'>) => ({
    transform: `translateX(${value})`
  }),
  translateY: (value: PropertyValue<'width'>) => ({
    transform: `translateY(${value})`
  }),
  p: (padding: PropertyValue<'padding'>) => ({
    padding
  }),
  pb: (paddingBottom: PropertyValue<'paddingBottom'>) => ({
    paddingBottom
  }),
  pt: (paddingTop: PropertyValue<'paddingTop'>) => ({
    paddingTop
  }),
  pl: (paddingLeft: PropertyValue<'paddingLeft'>) => ({
    paddingLeft
  }),
  pr: (paddingRight: PropertyValue<'paddingRight'>) => ({
    paddingRight
  }),
  m: (margin: PropertyValue<'margin'>) => ({
    margin
  }),
  mb: (marginBottom: PropertyValue<'marginBottom'>) => ({
    marginBottom
  }),
  mt: (marginTop: PropertyValue<'marginTop'>) => ({
    marginTop
  }),
  ml: (marginLeft: PropertyValue<'marginLeft'>) => ({
    marginLeft
  }),
  mr: (marginRight: PropertyValue<'marginRight'>) => ({
    marginRight
  })
}
