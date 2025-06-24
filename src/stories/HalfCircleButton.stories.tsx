import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { HalfCircleButton, HalfCircleButtonProps } from 'compies';

import "compies/style";

const meta: Meta<HalfCircleButtonProps> = {
  title: 'Components/HalfCircleButton',
  component: HalfCircleButton,
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: action('button-click') },
};

export default meta;
type Story = StoryObj<HalfCircleButtonProps>;

export const StandardMode: Story = {
  args: {
    direction: 'up',
    children: 'Click Me',
  },
};

export const HalfCircleButtonStory: Story = {
  args: {
    style: {
      width: '20rem',
      height: '10rem',
      secondaryColor: '#000000',
      borderRadius: '10rem 10rem 0 0',
      primaryColor: '#FFFFFF',
    },
    children: 'Click Me',
    direction: 'up',
  },
};

export const LargeButton: Story = {
  args: {
    size: 200,
    children: 'Large Button',
    direction: 'up',
    primaryColor: '#FFFFFF',
    secondaryColor: '#000000',
  },
};

export const OutlinedButton: Story = {
  args: {
    children: 'Outlined Button',
    direction: 'up',
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
    mode: 'outlined',
  },
};

export const StandardButton: Story = {
  args: {
    children: 'Standard Button',
    direction: 'up',
    primaryColor: '#FFFFFF',
    secondaryColor: '#000000',
    mode: 'standard',
  },
};

export const DownButton: Story = {
  args: {
    children: 'Down button',
    direction: 'down',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    mode: 'material',
  },
};

export const LeftButton: Story = {
  args: {
    children: 'Left button',
    direction: 'left',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    mode: 'material',
  },
};

export const RightButton: Story = {
  args: {
    children: 'Right button',
    direction: 'right',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    mode: 'material',
  },
};

export const CustomButton: Story = {
  args: {
    children: 'Custom style button',
    primaryColor: '#FFFFFF',
    secondaryColor: '#000000',
    style: {
      transform: 'rotate(45deg)',
      width: '15rem',
      height: '7.5rem',
      borderRadius: '7.5rem 7.5rem 0 0',
    },
  },
};
