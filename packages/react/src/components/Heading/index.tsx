import { Heading as HeadingCSS } from '@crimson-ui/styles';
import { CSS, styled } from '@crimson-ui/web';
import { ComponentProps, FC } from 'react';

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
