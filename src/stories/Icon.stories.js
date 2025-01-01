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
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowSmallDown',
        'ArrowSmallLeft',
        'ArrowSmallRight',
        'ArrowSmallUp',
        'Chat',
        'Close',
        'Home',
        'Menu',
        'Notification',
        'Search',
        'Settings',
        'User',
      ],
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const ArrowDown = Template.bind({});
ArrowDown.args = { type: 'ArrowDown' };

export const ArrowLeft = Template.bind({});
ArrowLeft.args = { type: 'ArrowLeft' };

export const ArrowRight = Template.bind({});
ArrowRight.args = { type: 'ArrowRight' };

export const ArrowUp = Template.bind({});
ArrowUp.args = { type: 'ArrowUp' };

export const ArrowSmallDown = Template.bind({});
ArrowSmallDown.args = { type: 'ArrowSmallDown' };

export const ArrowSmallLeft = Template.bind({});
ArrowSmallLeft.args = { type: 'ArrowSmallLeft' };

export const ArrowSmallRight = Template.bind({});
ArrowSmallRight.args = { type: 'ArrowSmallRight' };

export const ArrowSmallUp = Template.bind({});
ArrowSmallUp.args = { type: 'ArrowSmallUp' };

export const Chat = Template.bind({});
Chat.args = { type: 'Chat' };

export const Close = Template.bind({});
Close.args = { type: 'Close' };

export const Home = Template.bind({});
Home.args = { type: 'Home' };

export const Menu = Template.bind({});
Menu.args = { type: 'Menu' };

export const Notification = Template.bind({});
Notification.args = { type: 'Notification' };

export const Search = Template.bind({});
Search.args = { type: 'Search' };

export const Settings = Template.bind({});
Settings.args = { type: 'Settings' };

export const User = Template.bind({});
User.args = { type: 'User' };
