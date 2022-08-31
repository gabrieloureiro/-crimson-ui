import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Text as TextReactComponent, TextProps } from '.';
import { CenterStoryComponent, disabledArgTypes } from '../../helpers';

export default {
  title: 'Typography/Text',
  component: TextReactComponent,
  argTypes: {
    ...disabledArgTypes,
    children: { control: { type: 'text' } },
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    fw: {
      options: ['regular', 'medium', 'bold'],
      control: { type: 'inline-radio' },
      description: 'Font weight',
      type: 'symbol',
    },
    lh: {
      options: ['shorter', 'short', 'normal', 'tall'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'Text',
    fw: 'regular',
    size: 'md',
    lh: 'normal',
  } as TextProps,
} as Meta;

const Template: Story<TextProps> = (args) => (
  <CenterStoryComponent>
    <TextReactComponent css={{ m: '$auto' }} {...args} />
  </CenterStoryComponent>
);

export const Text = Template.bind({});
