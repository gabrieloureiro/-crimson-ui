import { Heading as HeadingCSS } from '@crimson-ui/styles';
import { styled } from '@crimson-ui/web';
import React, { ComponentProps, ElementRef, forwardRef } from 'react';

const StyledHeading = styled('h2', HeadingCSS);

export type HeadingProps = ComponentProps<typeof StyledHeading> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading = forwardRef<
  ElementRef<typeof StyledHeading>,
  HeadingProps
>(({ children, as = 'h2', ...props }, forwardedRef) => {
  return (
    <StyledHeading as={as} ref={forwardedRef} {...props}>
      {children}
    </StyledHeading>
  );
});

Heading.displayName = 'Heading';
