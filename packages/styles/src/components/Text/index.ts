import { css } from '@crimson-ui/web';

export const Text = css({
  color: '$colors$main',
  mx: '$5',
  my: '$5',
  justify: 'center',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
