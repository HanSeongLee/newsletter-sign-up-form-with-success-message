import { Meta, StoryObj } from '@storybook/react';
import Paragraph from './index';

const meta: Meta<typeof Paragraph> = {
    title: 'Components/Typography/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam nunc eget, aliquam nunc.',
    },
};
