import React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { GallerySelector } from 'compies';

import "compies/style";

const elements = [
  { title: "Item 1", subtitle: "Subtitle 1" },
  { title: "Item 2", subtitle: "Subtitle 2" },
  { title: "Item 3", subtitle: "Subtitle 3" },
  { title: "Item 4", subtitle: "Subtitle 4" },
  { title: "Item 5", subtitle: "Subtitle 5" },
  { title: "Item 6", subtitle: "Subtitle 6" },
];

const renderSelectedElement = (element) => (
  <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
    <div style={{"border":"solid", width:"150px", height:"150px"}}>
      <h1>{element.title}</h1>
      <p>{element.subtitle}</p>
    </div>
    <div style={{"border":"solid", width:"150px", height:"150px"}}>
      <h1>{element.title}</h1>
      <p>{element.subtitle}</p>
    </div>
    <div style={{"border":"solid", width:"150px", height:"150px"}}>
      <h1>{element.title}</h1>
      <p>{element.subtitle}</p>
    </div>
    <div style={{"border":"solid", width:"150px", height:"150px"}}>
      <h1>{element.title}</h1>
      <p>{element.subtitle}</p>
    </div>
  </div>
)

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/GallerySelector',
  component: GallerySelector,
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '400px' }}>
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
} satisfies Meta<typeof GallerySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardGallerySelector: Story = {
  args:{
    elements: elements,
    position: "left"
  }
}

export const GallerySelectorWithHorizontalDisplay: Story = {
  args:{
    elements: elements,
    position: "bottom"
  }
}

export const GallerySelectorWithCustomSize: Story = {
  args:{
    elements: elements,
    position: "left",
    gallerySize: 50
  }
}

export const GallerySelectorWithMaterialTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "material"
  }
}

export const GallerySelectorWithBorderTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "border"
  }
}

export const GallerySelectorWithMaterialGalleryTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "border",
    galleryTheme: "material"
  }
}

export const GallerySelectorWithOutlinedGalleryTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "border",
    galleryTheme: "outlined"
  }
}

export const GallerySelectorWithRoundedGalleryTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "border",
    galleryTheme: "rounded"
  }
}

export const GallerySelectorWithMaterialRoundedGalleryTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "border",
    galleryTheme: "material-rounded"
  }
}

export const GallerySelectorWithOutlinedRoundedGalleryTheme: Story = {
  args:{
    elements: elements,
    position: "left",
    theme: "border",
    galleryTheme: "outlined-rounded"
  }
}

export const GallerySelectorWithCustomSelectionRendering: Story = {
  args:{
    elements: elements,
    position: "left",
    renderSelectedElement:renderSelectedElement 
  }
}

export const GallerySelectorWithDefaultSelectedIndex: Story = {
  args:{
    elements: elements,
    position: "left",
    defaultSelectedIndex:3
  }
}

export const GallerySelectorWithCustomOnSelect: Story = {
  args:{
    elements: elements,
    position: "left",
    onSelect:(element) => {
      alert(`you selected ${element.title}`)
    }
  }
}
