import {
  createStitches,
  CSS,
  defaultThemeMap,
  PropertyValue,
  ScaleValue,
} from '@stitches/react';

type StitchesCSS<T> = CSS<T>;

const utils = {
  fw: (value: PropertyValue<'fontWeight'>) => ({
    fontWeight: value,
  }),
  lh: (value: PropertyValue<'lineHeight'>) => ({
    lineHeight: value,
  }),

  justify: (value: PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  align: (value: PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  flexDir: (value: PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),

  p: (value: ScaleValue<'space'>) => ({
    padding: value,
  }),
  pt: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
  }),
  pr: (value: ScaleValue<'space'>) => ({
    paddingRight: value,
  }),
  pb: (value: ScaleValue<'space'>) => ({
    paddingBottom: value,
  }),
  pl: (value: ScaleValue<'space'>) => ({
    paddingLeft: value,
  }),
  px: (value: ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: ScaleValue<'space'>) => ({
    margin: value,
  }),
  mt: (value: ScaleValue<'space'>) => ({
    marginTop: value,
  }),
  mr: (value: ScaleValue<'space'>) => ({
    marginRight: value,
  }),
  mb: (value: ScaleValue<'space'>) => ({
    marginBottom: value,
  }),
  ml: (value: ScaleValue<'space'>) => ({
    marginLeft: value,
  }),
  mx: (value: ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export { createStitches, defaultThemeMap, utils, type StitchesCSS };
