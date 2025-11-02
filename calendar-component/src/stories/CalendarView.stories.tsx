import type { Meta, StoryObj } from "@storybook/react";
import CalendarView from "../components/Calendar/CalendarView";

const meta: Meta<typeof CalendarView> = {
  title: "Calendar/CalendarView",
  component: CalendarView,
};
export default meta;

export const Default: StoryObj = {
  args: {},
};

export const Empty: StoryObj = {
  args: {},
};

export const LargeDataset: StoryObj = {
  args: {},
};

export const InteractivePlayground: StoryObj = {
  args: {},
};
