import { create } from '@storybook/theming/create';

export default create({
    base: process.env.STORYBOOK_THEME_BASE || 'light',
    brandTitle: process.env.STORYBOOK_THEME_BRAND_TITLE || undefined,
    brandImage: process.env.STORYBOOK_THEME_BRAND_IMAGE || undefined,
    brandTarget: '_self',
});
