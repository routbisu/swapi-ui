import type { Meta, StoryObj } from "@storybook/react";
import { PersonCard } from "./PersonCard";

const meta = {
  title: "PersonCard",
  component: PersonCard,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof PersonCard>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    name: "Luke Skywalker",
    gender: "male",
    planet: "Earth",
  },
};
