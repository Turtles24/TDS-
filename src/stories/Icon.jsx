import React from 'react';
import PropTypes from 'prop-types';

import ArrowDown from './assets/ArrowDown.svg';
import ArrowLeft from './assets/ArrowLeft.svg';
import ArrowRight from './assets/ArrowRight.svg';
import ArrowUp from './assets/ArrowUp.svg';
import ArrowSmallDown from './assets/ArrowSmallDown.svg';
import ArrowSmallLeft from './assets/ArrowSmallLeft.svg';
import ArrowSmallRight from './assets/ArrowSmallRight.svg';
import ArrowSmallUp from './assets/ArrowSmallUp.svg';
import Chat from './assets/Chat.svg';
import Close from './assets/Close.svg';
import Home from './assets/Home.svg';
import Menu from './assets/Menu.svg';
import Notification from './assets/Notification.svg';
import Search from './assets/Search.svg';
import Settings from './assets/Settings.svg';
import User from './assets/User.svg';

const icons = {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowSmallDown,
  ArrowSmallLeft,
  ArrowSmallRight,
  ArrowSmallUp,
  Chat,
  Close,
  Home,
  Menu,
  Notification,
  Search,
  Settings,
  User,
};

const Icon = ({ type, size }) => {
  const IconComponent = icons[type];

  if (!IconComponent) {
    console.error(`Icon "${type}" does not exist.`);
    return null;
  }

  return (
    <img src={IconComponent} alt={type} style={{ width: size, height: size }} />
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
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
  ]).isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: '24px',
};

export default Icon;
