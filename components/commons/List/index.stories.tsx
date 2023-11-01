import { Meta, StoryObj } from '@storybook/react';
import List from './index';

const meta: Meta<typeof List> = {
    title: 'Components/List',
    component: List,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3'],
    },
};
