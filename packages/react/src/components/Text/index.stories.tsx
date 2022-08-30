import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Text as TextReactComponent, TextProps } from '.';
import { disabledArgTypes } from '../../helpers';

export default {
  title: 'Typography/Text',
  component: TextReactComponent,
  argTypes: {
    ...disabledArgTypes,
    children: { control: { type: 'text' } },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'Text',
    size: 'md',
  },
} as Meta;

const Template: Story<TextProps> = (args) => <TextReactComponent {...args} />;

export const Text = Template.bind({});
