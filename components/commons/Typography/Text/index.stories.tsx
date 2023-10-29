import { Meta, StoryObj } from '@storybook/react';
import Text from './index';

const meta: Meta<typeof Text> = {
    title: 'Components/Typography/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        children: 'Text',
    },
};
