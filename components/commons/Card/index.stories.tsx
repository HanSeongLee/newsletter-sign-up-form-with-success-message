import { Meta, StoryObj } from '@storybook/react';
import Card from './index';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {

    },
};
