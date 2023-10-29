import { Meta, StoryObj } from '@storybook/react';
import Title from './index';

const meta: Meta<typeof Title> = {
    title: 'Components/Typography/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
    args: {
        children: 'Title',
    },
};
