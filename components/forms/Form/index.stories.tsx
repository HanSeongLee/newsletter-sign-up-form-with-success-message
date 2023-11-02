import { Meta, StoryObj } from '@storybook/react';
import Form from './index';

const meta: Meta<typeof Form> = {
    title: 'Components/Form',
    component: Form,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    args: {
        title: 'Title',
        description: 'Description',
    },
};
