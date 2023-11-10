import { Meta, StoryObj } from '@storybook/react';
import SubscriptionCompletionForm from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SubscriptionCompletionForm> = {
    title: 'Components/Form/SubscriptionCompletionForm',
    component: SubscriptionCompletionForm,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof SubscriptionCompletionForm>;

export const Default: Story = {
    args: {
        email: 'ash@loremcompany.com',
        onSubmit: (e) => {
            e.preventDefault();
            action('form submitted')(e);
        },
    },
};
