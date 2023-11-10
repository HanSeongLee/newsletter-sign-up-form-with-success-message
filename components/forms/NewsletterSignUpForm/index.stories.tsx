import { Meta, StoryObj } from '@storybook/react';
import NewsletterSignUpForm from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof NewsletterSignUpForm> = {
    title: 'Components/Form/NewsletterSignUpForm',
    component: NewsletterSignUpForm,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof NewsletterSignUpForm>;

export const Default: Story = {
    args: {
        onSubmit: (e) => {
            e.preventDefault();
            action('form submitted')(e);
        },
    },
};
