import React from 'react';
import Divider from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    width: { control: 'text' }, // Controls the width of the divider
    height: { control: 'text' }, // Controls the height of the divider
    color: { control: 'color' }, // Allows color selection
  },
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '501px',
  height: '2px',
  color: 'rgba(136, 136, 136, 0.30)',
};
