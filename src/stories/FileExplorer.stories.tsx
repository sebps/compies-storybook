import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FileExplorer } from 'compies'; // adjust path if needed

import { MockWebSocket } from '../mocks/WebSocket';
window.WebSocket = MockWebSocket as unknown as typeof WebSocket;

const meta: Meta<typeof FileExplorer> = {
  title: 'Components/FileExplorer',
  component: FileExplorer,
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    files: [
      'src/index.tsx',
      'src/components/FileExplorer.tsx',
      'public/index.html',
      'README.md',
    ],
    onFileDelete: action('onFileDelete'),
    onFileRename: action('onFileRename'),
    onFileSelect: action('onFileSelect'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardMode: Story = {
  args: {},
};

export const StandardModeWithCustomColors: Story = {
  args: {
    color: '#0f0',
    backgroundColor: '#A9A9A9',
  },
};

export const WithNestedFiles: Story = {
  args: {
    files: [
      'docs/intro.md',
      'docs/tutorial/setup.md',
      'docs/tutorial/step1.md',
      'src/index.ts',
      'src/utils/helpers.ts',
      'test/index.test.ts',
    ],
  },
};
