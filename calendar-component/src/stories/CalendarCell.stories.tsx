import type { Meta, StoryObj } from "@storybook/react";
import { CalendarCell } from "../components/Calendar/CalendarCell";

const meta: Meta<typeof CalendarCell> = {
  title: "Calendar/CalendarCell",
  component: CalendarCell,
};
export default meta;

export const Default: StoryObj = {
  args: {
    date: new Date(),
    events: [],
    onSelect: () => {},
  },
};
