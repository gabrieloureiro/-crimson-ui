import React, { FC, ComponentProps } from 'react';
import { Heading as HeadingCSS } from '@crimson-ui/styles';
import { styled, CSS } from '@crimson-ui/web';

const StyledHeading = styled('span', HeadingCSS);

export type HeadingProps = CSS &
  ComponentProps<typeof StyledHeading> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

export const Heading: FC<HeadingProps> = ({
  children,
  as = 'h2',
  ...props
}) => {
  return (
    <StyledHeading as={as} {...props}>
      {children}
    </StyledHeading>
  );
};
