import React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Terminal } from 'compies';

// Override the global WebSocket with the mock
import { MockWebSocket } from "../mocks/WebSocket";
window.WebSocket = MockWebSocket as unknown as typeof WebSocket;


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Terminal',
  component: Terminal,
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onInput: fn() },
} satisfies Meta<typeof Terminal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardMode: Story = {
  args:{}
};

export const StandardModeWithCustomColors: Story = {
  args:{
    textColor:"#0f0",
    backgroundColor:"#A9A9A9"
  }
};

export const StandardModeWithInitialContent: Story = {
  args:{
    initialContent:"Welcome to the terminal..."
  }
};

export const StandardModeWithInitialCommands: Story = {
  args:{
    initialCommands:["help", "ls","cd src"],
    initialReturns:["this is a terminal component. Available commands are : \"ls\", \"cd\" and \"clear\"", "src lib bin", "ok"],
  }
};

export const WebsocketMode: Story = {
  args:{
    mode: "websocket",
    websocketUrl: "ws://localhost:8080",
    initialContent: "Connecting to WebSocket..."
  }
};

export const DesktopTheme: Story = {
  args:{
    theme: "desktop"
  }
};

export const DesktopThemeWithCustomColors: Story = {
  args:{
    theme: "desktop",
    textColor:"#0f0",
    backgroundColor:"#A9A9A9"
  }
};