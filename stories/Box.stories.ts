import Box from "../components/atoms/Box";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "박스 Box 0123",
  },
};

// export const Secondary: Story = {
//   args: {
//     label: '박스 Box 0123',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: '박스 Box 0123',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: '박스 Box 0123',
//   },
// };
