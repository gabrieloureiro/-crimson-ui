import { css } from '@crimson-ui/web';

export const Heading = css({
  variants: {
    size: {
      sm: {
        fontSize: '$xl ',
      },
      md: {
        fontSize: '$2xl',
      },
      lg: {
        fontSize: '$4xl',
      },
      xl: {
        fontSize: '$6xl',
      },
      '2xl': {
        fontSize: '$7xl',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});
