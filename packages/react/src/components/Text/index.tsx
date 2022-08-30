import React, { FC, ComponentProps } from 'react';
import { Text as TextCSS } from '@crimson-ui/styles';
import { styled, CSS } from '@crimson-ui/web';

const StyledText = styled('span', TextCSS);

export type TextProps = CSS & ComponentProps<typeof StyledText>;

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
