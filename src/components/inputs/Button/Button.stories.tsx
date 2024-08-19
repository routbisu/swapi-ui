import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { SkipBack, SkipForward } from "@phosphor-icons/react";

const meta = {
  title: "Inputs / Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Previous: StoryObj<typeof meta> = {
  args: {
    children: "Previous",
    startIcon: SkipBack,
  },
};

export const Next: StoryObj<typeof meta> = {
  args: {
    children: "Next",
    endIcon: SkipForward,
  },
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    children: "Previous",
    startIcon: SkipBack,
    disabled: true,
  },
};
