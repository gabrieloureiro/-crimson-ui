import React, { FC, ComponentProps } from 'react';
import { Text as TextCSS } from '@crimson-ui/styles';
import { styled, CSS } from '@crimson-ui/web';

const StyledText = styled('span', TextCSS);

type TextAs = 'p' | 'span';

export type TextProps = CSS & ComponentProps<typeof StyledText>;

export const Text: FC<TextProps> = ({ children, as = 'span', ...props }) => {
  return (
    <StyledText as={as} {...props}>
      {children}
    </StyledText>
  );
};
