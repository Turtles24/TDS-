// Icon.stories.js
import React from 'react';
import Icon from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    size: { control: 'text' },
    type: { 
      control: 'select', 
      options: [
        'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 
        'close', 'menu', 'home', 'settings', 'search', 'bell', 'user'
      ] 
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const ArrowUp = Template.bind({});
ArrowUp.args = { type: 'arrow-up' };

export const ArrowDown = Template.bind({});
ArrowDown.args = { type: 'arrow-down' };

export const ArrowLeft = Template.bind({});
ArrowLeft.args = { type: 'arrow-left' };

export const ArrowRight = Template.bind({});
ArrowRight.args = { type: 'arrow-right' };

export const Close = Template.bind({});
Close.args = { type: 'close' };

export const Menu = Template.bind({});
Menu.args = { type: 'menu' };

export const Home = Template.bind({});
Home.args = { type: 'home' };

export const Settings = Template.bind({});
Settings.args = { type: 'settings' };

export const Search = Template.bind({});
Search.args = { type: 'search' };

export const Bell = Template.bind({});
Bell.args = { type: 'bell' };

export const User = Template.bind({});
User.args = { type: 'user' };
