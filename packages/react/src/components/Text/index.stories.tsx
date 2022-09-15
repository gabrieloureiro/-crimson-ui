import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CenterStoryComponent } from '../../../.storybook/Center';
import { Text as TextReactComponent, TextProps } from '.';

export default {
  title: 'Typography/Text',
  component: TextReactComponent,
  argTypes: {
    css: { table: { disable: true } },
    children: { control: { type: 'text' } },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'Text',
    size: 'sm',
  } as TextProps,
} as Meta;

const Template: Story<Omit<TextProps, 'ref'>> = (args) => (
  <CenterStoryComponent>
    <TextReactComponent {...args} />
  </CenterStoryComponent>
);

export const Text = Template.bind({});
