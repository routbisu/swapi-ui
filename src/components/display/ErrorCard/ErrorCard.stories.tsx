import type { Meta, StoryObj } from "@storybook/react";
import { ErrorCard } from "./ErrorCard";

const meta = {
  title: "Display / ErrorCard",
  component: (props) => (
    <div style={{ width: 500 }}>
      <ErrorCard {...props} />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ErrorCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
};
