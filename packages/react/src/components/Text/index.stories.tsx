import { Meta, Story } from '@storybook/react';
import React from 'react';
import { CenterStoryComponent, disabledArgTypes } from 'utils';

import { Text as TextReactComponent, TextProps } from '.';

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
    size: 'sm',
  } as TextProps,
} as Meta;

const Template: Story<Omit<TextProps, 'ref'>> = (args) => (
  <CenterStoryComponent>
    <TextReactComponent css={{ m: '$auto' }} {...args} />
  </CenterStoryComponent>
);

export const Text = Template.bind({});
