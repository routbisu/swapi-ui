import type { Meta, StoryObj } from "@storybook/react";
import { DarthVaderGraphic } from "./DarthVaderGraphic";

const meta = {
  title: "Media / Darth Vader Graphic",
  component: DarthVaderGraphic,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DarthVaderGraphic>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
