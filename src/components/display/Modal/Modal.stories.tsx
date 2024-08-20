import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Typography } from "../Typography";

const meta = {
  title: "Display / Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    heading: "Edit character",
    onClose: () => {},
    children: (
      <Typography variant="body2" color="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        dolores unde cum architecto suscipit amet alias, possimus, dolorem
        magnam laudantium hic debitis earum at a nemo dicta ducimus quidem
        minus.
      </Typography>
    ),
  },
};
