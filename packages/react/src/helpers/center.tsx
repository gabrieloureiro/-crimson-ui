import React, { FC, ComponentProps } from 'react';
import { styled } from '@crimson-ui/web';

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
