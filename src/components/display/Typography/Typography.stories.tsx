import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Display / Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

export const Heading1: StoryObj<typeof meta> = {
  args: { children: "This is a heading 1", variant: "h1" },
};

export const Heading2: StoryObj<typeof meta> = {
  args: { children: "This is a heading 2", variant: "h2" },
};

export const Body1: StoryObj<typeof meta> = {
  args: { children: "This is a body 1", variant: "body1", color: "secondary" },
};

export const Body1WithLabel: StoryObj<typeof meta> = {
  args: {
    children: "This is a body 1 with label",
    label: "Label",
    variant: "body1",
    color: "secondary",
  },
};

export const Body2: StoryObj<typeof meta> = {
  args: { children: "This is a body 2", variant: "body2", color: "secondary" },
};
