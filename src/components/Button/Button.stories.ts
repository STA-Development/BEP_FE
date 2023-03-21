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

export const Contained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'contained',
    size: 'sm',
    children: 'Button',
  },
}

export const Base: Story = {
  args: {
    variant: 'contained',
    size: 'bs',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'contained',
    size: 'lg',
    children: 'Button',
  },
}

export const Full: Story = {
  args: {
    variant: 'contained',
    size: 'fl',
    children: 'Button',
  },
}

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
