import { expect, userEvent, within } from '@storybook/test';
import { fn } from '@storybook/test';
import { Kakao } from './social';
export default {
  title: 'Social/Button',
  component: Kakao,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const KakaoButton = {
    
};