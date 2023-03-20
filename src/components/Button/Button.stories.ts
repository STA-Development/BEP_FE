import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Button',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
}

// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     children: 'Button',
//   },
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }
//
// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }
