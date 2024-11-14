import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['square', 'circle'],
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Square = Template.bind({});
Square.args = {
  label: '전체 동의하기',
  type: 'square',
};

export const Circle = Template.bind({});
Circle.args = {
  label: '전체 동의하기',
  type: 'circle',
};
