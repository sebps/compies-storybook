import React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import { LlmChat } from 'compies';

// Override the global WebSocket with the mock
import { MockWebSocket } from "../mocks/WebSocket";
window.WebSocket = MockWebSocket as unknown as typeof WebSocket;

/**
 *
 * This component is an out-of-the box and flexible `LlmChat` component, including its title, decorators, parameters, and tags.
 *
 */
const meta = {
  title: 'Components/LlmChat',
  component: LlmChat,
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
  // args: { onInput: fn() },
} satisfies Meta<typeof LlmChat>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardMode: Story = {
  args:{
    placeholder: "Type your message...",
    withHistory: true,
    llm: { 
      name: "openai", 
      model: "gpt-3.5-turbo", 
      baseUri: "https://api.openai.com/v1", 
      apiKey: "<openai_api_key>" 
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardModeWithoutHistory: Story = {
  args:{
    placeholder: "Type your message...",
    prompt: "You are a helpful assistant.",
    withHistory: false,
    onResult: fn("onResult"),
    llm: { 
      name: "openai", 
      model: "gpt-3.5-turbo", 
      baseUri: "https://api.openai.com/v1", 
      apiKey: "<openai_api_key>" 
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardModeInitialPrompt: Story = {
  args:{
    placeholder: "Type your message...",
    prompt: "You are a helpful assistant.",
    withHistory: true,
    llm: { 
      name: "openai", 
      model: "gpt-3.5-turbo", 
      baseUri: "https://api.openai.com/v1", 
      apiKey: "<openai_api_key>" 
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardModeHiddenInitialPrompt: Story = {
  args:{
    placeholder: "Type your message...",
    prompt: "You are a helpful assistant.",
    withHistory: true,
    withPrompt: false,
    llm: { 
      name: "openai", 
      model: "gpt-3.5-turbo", 
      baseUri: "https://api.openai.com/v1", 
      apiKey: "<openai_api_key>" 
    }
  }
};

export const StandardModeMultipleLlms: Story = {
  args:{
    placeholder: "Type your message...",
    withHistory: true,
    llms: [{ 
      name: "openai", 
      model: "gpt-3.5-turbo", 
      baseUri: "https://api.openai.com/v1", 
      apiKey: "<openai_api_key>" 
    }, { 
      name: "claude", 
      model: "gpt-3.5-turbo", 
      baseUri: "https://api.openai.com/v1", 
      apiKey: "<openai_api_key>" 
    }]
  }
};