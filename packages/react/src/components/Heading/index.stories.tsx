import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CenterStoryComponent, disabledArgTypes } from '../../helpers';
import { Heading as HeadingReactComponent, HeadingProps } from '.';

export default {
  title: 'Typography/Heading',
  component: HeadingReactComponent,
  argTypes: {
    ...disabledArgTypes,
    children: { control: { type: 'text' } },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'Heading',
    size: 'sm',
  } as HeadingProps,
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <CenterStoryComponent>
    <HeadingReactComponent css={{ m: '$auto' }} {...args} />
  </CenterStoryComponent>
);

export const Heading = Template.bind({});
