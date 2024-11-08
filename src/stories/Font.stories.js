// Font.stories.js
import React from 'react';
import { Font } from './Font';

export default {
    title: 'Components/Font',
    component: Font,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['Title', 'Body', 'Caption'],
        },
        type: {
            control: { type: 'select' },
            options: ['1', '2', '3', '4', '5', '6'],
        },
    },
};

const Template = (args) => <Font {...args} />;

// Story examples for Title, Body, and Caption
export const Title = Template.bind({});
Title.args = {
    variant: 'Title',
    type: '1', // Adjust to 2, 3, etc. to test different title sizes
    content: 'Title',
};

export const Body = Template.bind({});
Body.args = {
    variant: 'Body',
    type: '1', // Adjust to 2, 3, etc. to test different body styles
    content: 'Body',
};

export const Caption = Template.bind({});
Caption.args = {
    variant: 'Caption',
    type: '1', // Adjust to 2, 3, etc. to test different caption styles
    content: 'Caption',
};
