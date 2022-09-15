import { styled } from '@crimson-ui/web';
import React, { ComponentProps, FC } from 'react';

const StyledCenter = styled('div', {
  flex: 1,
  display: 'flex',
  align: 'center',
  justify: 'center',
  height: '120px',
  p: '$5',
});

export type CenterStoryProps = ComponentProps<typeof StyledCenter>;

export const CenterStoryComponent: FC<CenterStoryProps> = ({
  children,
  ...props
}) => {
  return <StyledCenter {...props}>{children}</StyledCenter>;
};
