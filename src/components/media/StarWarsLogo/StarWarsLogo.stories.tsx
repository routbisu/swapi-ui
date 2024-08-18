import type { Meta, StoryObj } from "@storybook/react";
import { StarWarsLogo } from "./StarWarsLogo";

const meta = {
  title: "Star Wars Logo",
  component: StarWarsLogo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof StarWarsLogo>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    height: 150,
  },
};
