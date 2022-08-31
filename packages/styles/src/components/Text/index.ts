import { css } from '@crimson-ui/web';
import * as primitive from '../../primitiveVariants';

export const Text = css({
  variants: {
    color: primitive.colorsVariant,
    size: primitive.fontSizeVariant,
    fw: primitive.fontWeightVariant,
    fontWeight: primitive.fontWeightVariant,
    lh: primitive.lineHeightVariant,
    lineHeight: primitive.lineHeightVariant,
  },

  defaultVariants: {
    size: 'md',
    fw: 'regular',
    lh: 'tall',
    color: 'primary',
  },
});
