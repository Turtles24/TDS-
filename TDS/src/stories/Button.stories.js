import { fn } from '@storybook/test';
import { Button } from './Button';

// Storybook 기본 설정
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'kakao', 'google'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xl'],
    },
  },
  args: { onClick: fn() },
};

// Primary 버튼 스토리
export const Primary = {
  args: {
    type: 'primary',
    label: 'BUTTON',
  },
};

// Secondary 버튼 스토리
export const Secondary = {
  args: {
    type: 'secondary',
    label: 'BUTTON',
  },
};

// Kakao 버튼 스토리
export const Kakao = {
  args: {
    type: 'kakao',
    label: 'Kakao',
    size: 'large',
  },
};

// Google 버튼 스토리
export const Google = {
  args: {
    type: 'google',
    label: 'Google',
    size: 'large',
  },
};

// 사이즈별 버튼 스토리
export const XL = {
  args: {
    size: 'xl',
    label: 'BUTTON',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'BUTTON',
  },
};

export const Medium = {
  args: {
    size: 'medium',
    label: 'BUTTON',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'BUTTON',
  },
};

