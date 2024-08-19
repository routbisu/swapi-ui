import type { Meta, StoryObj } from "@storybook/react";
import { Textfield } from "./Textfield";
import { MagnifyingGlass } from "@phosphor-icons/react";

const meta = {
  title: "Inputs / Textfield",
  component: Textfield,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Textfield>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    placeholder: "Character name",
  },
};

export const SearchField: StoryObj<typeof meta> = {
  args: {
    placeholder: "Search",
    icon: MagnifyingGlass,
  },
};
