import React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { VideoPlayer } from 'compies';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
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
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StandardMode: Story = {
  args:{
    videoUrls:[
      "https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4",
      "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/3115738/3115738-uhd_2560_1440_24fps.mp4"
    ]
  }
};

export const StandardModeWithMaterialTheme: Story = {
  args:{
    videoUrls:[
      "https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4",
      "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/3115738/3115738-uhd_2560_1440_24fps.mp4"
    ],
    theme: "material"
  }
};

export const StandardModeWithAutoplay: Story = {
  args:{
    videoUrls:[
      "https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4",
      "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/3115738/3115738-uhd_2560_1440_24fps.mp4"
    ],
    autoplay: true
  }
};

export const StandardModeWithAutoplayAndLoop: Story = {
  args:{
    videoUrls:[
      "https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4",
      "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/3115738/3115738-uhd_2560_1440_24fps.mp4"
    ],
    autoplay: true,
    loop: true
  }
};

export const StandardModeWithCustomBackground: Story = {
  args:{
    videoUrls:[
      "https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4",
      "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/3115738/3115738-uhd_2560_1440_24fps.mp4"
    ],
    controlsBackground: "#000000"
  }
};

export const StandardModeWithPictureInPicture: Story = {
  args:{
    videoUrls:[
      "https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4",
      "https://videos.pexels.com/video-files/1580455/1580455-hd_1920_1080_30fps.mp4",
      "https://videos.pexels.com/video-files/3115738/3115738-uhd_2560_1440_24fps.mp4"
    ],
    pictureInPicture: true
  }
};