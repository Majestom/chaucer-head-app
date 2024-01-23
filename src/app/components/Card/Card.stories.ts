import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    content: {
      id: "number",
      title: "string",
      description: "string",
      author: "string",
      price: "string",
      onSale: "boolean",
      draft: "boolean",
    },
    textFilter: {
      Pratchett: "string",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    content: {
      id: 123,
      title: "Strata",
      author: "Terry Pratchett",
      description:
        "Terry Pratchett's second science fiction novel.",
      price: "£8.00",
      onSale: true,
      draft: false,
    },
    textFilter: "Pratchett",
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Card",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Card",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Card",
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: "Delete now",
//     backgroundColor: "red",
//   },
// };
