import { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Email Address',
        id: 'email-default',
        type: 'email',
        placeholder: 'email@company.com',
    },
};

export const Error: Story = {
    args: {
        label: 'Email Address',
        id: 'email-error',
        type: 'email',
        placeholder: 'email@company.com',
        error: 'Valid email required',
    },
};
