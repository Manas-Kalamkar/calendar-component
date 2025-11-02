import type { Meta, StoryObj } from "@storybook/react";
import EventModal from "../components/Calendar/EventModal";

const meta: Meta<typeof EventModal> = {
  title: "Calendar/EventModal",
  component: EventModal,
};
export default meta;

export const Default: StoryObj = {
  args: {
    isSelected: true,
    selectedDate: new Date(),
    setIsSelected: () => {},
    events: {},
    saveEvents: () => {},
  },
};
