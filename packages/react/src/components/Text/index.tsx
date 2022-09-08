import { Text as TextCSS } from '@crimson-ui/styles';
import { CSS, styled } from '@crimson-ui/web';
import React, { ComponentProps, FC } from 'react';

const StyledText = styled('p', TextCSS);

export type TextProps = CSS &
  ComponentProps<typeof StyledText> & {
    as?: 'p' | 'span';
  };

export const Text: FC<TextProps> = ({ children, as = 'p', ...props }) => {
  return (
    <StyledText as={as} {...props}>
      {children}
    </StyledText>
  );
};
