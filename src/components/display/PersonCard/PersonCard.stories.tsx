import type { Meta, StoryObj } from "@storybook/react";
import { PersonCard } from "./PersonCard";

const meta = {
  title: "Person Card",
  component: (props) => (
    <div style={{ width: 400 }}>
      <PersonCard {...props} />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PersonCard>;

export default meta;

export const MaleCharacter: StoryObj<typeof meta> = {
  args: {
    name: "Luke Skywalker",
    gender: "Male",
    planet: "Tatooine",
  },
};

export const FemaleCharacter: StoryObj<typeof meta> = {
  args: {
    name: "Leia Organa",
    gender: "Female",
    planet: "Alderaan",
  },
};
