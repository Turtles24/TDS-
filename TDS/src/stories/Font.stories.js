// Font.stories.js
import React from 'react';
import { Font } from './Font';

export default {
  title: 'Typography/Font',
  component: Font,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: { control: 'text' },
  },
};

const Template = (args) => <Font {...args} />;

/* ----------------------------- Title Variants ----------------------------- */

export const Title1 = Template.bind({});
Title1.args = {
  variant: 'title-1',
  content: '40 Extra Bold',
};

export const Title2 = Template.bind({});
Title2.args = {
  variant: 'title-2',
  content: '36 Extra Bold',
};

export const Title3 = Template.bind({});
Title3.args = {
  variant: 'title-3',
  content: '32 Extra Bold',
};

export const Title4 = Template.bind({});
Title4.args = {
  variant: 'title-4',
  content: '24 Extra Bold',
};

export const Title5 = Template.bind({});
Title5.args = {
  variant: 'title-5',
  content: '20 Extra Bold',
};

export const Title6 = Template.bind({});
Title6.args = {
  variant: 'title-6',
  content: '16 Extra Bold',
};

/* ----------------------------- Body Variants ----------------------------- */

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body-1',
  content: '16 Bold',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body-2',
  content: '14 Semi Bold',
};

export const Body3 = Template.bind({});
Body3.args = {
  variant: 'body-3',
  content: '16 Regular',
};

export const Body4 = Template.bind({});
Body4.args = {
  variant: 'body-4',
  content: '14 Bold',
};

export const Body5 = Template.bind({});
Body5.args = {
  variant: 'body-5',
  content: '14 Semi Bold',
};

export const Body6 = Template.bind({});
Body6.args = {
  variant: 'body-6',
  content: '14 Regular',
};

/* ----------------------------- Caption Variants ----------------------------- */

export const Caption1 = Template.bind({});
Caption1.args = {
  variant: 'caption-1',
  content: '14 Bold',
};

export const Caption2 = Template.bind({});
Caption2.args = {
  variant: 'caption-2',
  content: '12 Bold',
};

export const Caption3 = Template.bind({});
Caption3.args = {
  variant: 'caption-3',
  content: '12 Regular',
};

export const Caption4 = Template.bind({});
Caption4.args = {
  variant: 'caption-4',
  content: '10 Bold',
};

export const Caption5 = Template.bind({});
Caption5.args = {
  variant: 'caption-5',
  content: '10 Regular',
};
