import type { Meta, StoryObj } from "@storybook/react";
import { Shimmer } from "./Shimmer";

const meta = {
  title: "Display / Shimmer",
  component: Shimmer,
} satisfies Meta<typeof Shimmer>;

export default meta;

export const PrimaryColor: StoryObj<typeof meta> = {
  args: {},
};

export const SecondaryColor: StoryObj<typeof meta> = {
  args: {
    color: "secondary",
  },
};
