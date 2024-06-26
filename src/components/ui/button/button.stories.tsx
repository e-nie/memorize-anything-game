import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

// -----in every story
const meta = {
  argTypes: {
    variant: {
      // control: { type: 'radio' },
      options: ["primary", "secondary", "tertiary", "link"],
    },
  },
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ----------------------

export const Primary: Story = {
  args: {
    children: "Primary Button",
    disabled: false,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    disabled: false,
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    disabled: false,
    variant: "tertiary",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Primary Button",
    disabled: false,
    fullWidth: true,
    variant: "primary",
  },
};

export const AsLink: Story = {
  args: {
    as: "a",
    children: "Link that looks like a button",
    disabled: false,
    variant: "link",
  },
};
