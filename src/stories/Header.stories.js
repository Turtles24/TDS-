import { fn } from '@storybook/test';
import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onBack: false,
    onSearch: false,
    title: '타이틀',
  },
};

export const TitleOnly = {
  args: {
    onBack: false,
    onSearch: false,
    title: '타이틀',
  },
};

export const TitleWithBackButton = {
  args: {
    onBack: true,
    onSearch: false,
    title: '타이틀',
  },
};

export const TitleWithSearchButton = {
  args: {
    onBack: false,
    onSearch: true,
    title: '타이틀',
  },
};

export const OriginalHeader = {
  args: {
    onBack: true,
    onSearch: true,
    title: '타이틀',
  },
};
