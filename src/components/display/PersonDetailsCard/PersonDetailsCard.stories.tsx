import type { Meta, StoryObj } from "@storybook/react";
import { PersonDetailsCard } from "./PersonDetailsCard";

const meta = {
  title: "Display / Person Details Card",
  component: (props) => (
    <div style={{ width: 600 }}>
      <PersonDetailsCard {...props} />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PersonDetailsCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    name: "Luke Skywalker",
    gender: "Male",
    planet: "Tatooine",
    hairColour: "blonde",
    eyeColour: "blue",
    films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
    starships: [
      "CR90 corvette",
      "Star Destroyer",
      "Sentinel-class landing craft",
    ],
  },
};
