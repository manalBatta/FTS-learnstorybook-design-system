import { Button } from './Button';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'blue', 'black'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    color: 'blue',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    color: 'blue',
  },
};

export const Text = {
  args: {
    label: 'Text Button',
    variant: 'text',
    color: 'blue',
  },
};
