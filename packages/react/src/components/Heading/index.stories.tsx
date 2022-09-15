import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CenterStoryComponent } from '../../../.storybook/Center';
import { Heading as HeadingReactComponent, HeadingProps } from '.';

export default {
  title: 'Typography/Heading',
  component: HeadingReactComponent,
  argTypes: {
    css: { table: { disable: true } },
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

const Template: Story<Omit<HeadingProps, 'ref'>> = (args) => (
  <CenterStoryComponent>
    <HeadingReactComponent {...args} />
  </CenterStoryComponent>
);

export const Heading = Template.bind({});
