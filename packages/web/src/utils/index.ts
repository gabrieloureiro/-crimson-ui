import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';

const utils = {
  fw: (value: Stitches.PropertyValue<'fontWeight'>) => ({
    fontWeight: value,
  }),
  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value,
  }),

  justify: (value: Stitches.PropertyValue<'justifyContent'>) => ({
    justifyContent: value,
  }),
  align: (value: Stitches.PropertyValue<'alignItems'>) => ({
    alignItems: value,
  }),
  flexDir: (value: Stitches.PropertyValue<'flexDirection'>) => ({
    flexDirection: value,
  }),

  p: (value: Stitches.ScaleValue<'space'>) => ({
    padding: value,
  }),
  pt: (value: Stitches.ScaleValue<'space'>) => ({
    paddingTop: value,
  }),
  pr: (value: Stitches.ScaleValue<'space'>) => ({
    paddingRight: value,
  }),
  pb: (value: Stitches.ScaleValue<'space'>) => ({
    paddingBottom: value,
  }),
  pl: (value: Stitches.ScaleValue<'space'>) => ({
    paddingLeft: value,
  }),
  px: (value: Stitches.ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  m: (value: Stitches.ScaleValue<'space'>) => ({
    margin: value,
  }),
  mt: (value: Stitches.ScaleValue<'space'>) => ({
    marginTop: value,
  }),
  mr: (value: Stitches.ScaleValue<'space'>) => ({
    marginRight: value,
  }),
  mb: (value: Stitches.ScaleValue<'space'>) => ({
    marginBottom: value,
  }),
  ml: (value: Stitches.ScaleValue<'space'>) => ({
    marginLeft: value,
  }),
  mx: (value: Stitches.ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export { createStitches, defaultThemeMap, utils, type Stitches };
