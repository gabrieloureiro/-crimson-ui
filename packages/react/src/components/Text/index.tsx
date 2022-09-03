import React, { FC, ComponentProps } from 'react';
import { Text as TextCSS } from '@crimson-ui/styles';
import { styled, CSS } from '@crimson-ui/web';

const StyledText = styled('span', TextCSS);

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
