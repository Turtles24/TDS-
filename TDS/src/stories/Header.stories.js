import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onBack: false,
    onSearch: true,
    title: 'Turtles🐢',
  },
};

export const TitleOnly = {
  args: {
    onBack: false,
    onSearch: false,
    title: 'Turtles🐢',
  },
};

export const TitleWithBackButton = {
  args: {
    onBack: true,
    onSearch: false,
    title: 'Turtles🐢',
  },
};

export const TitleWithSearchButton = {
  args: {
    onBack: false,
    onSearch: true,
    title: 'Turtles🐢',
  },
};

export const OriginalHeader = {
  args: {
    onBack: true,
    onSearch: true,
    title: 'Turtles🐢',
  },
};