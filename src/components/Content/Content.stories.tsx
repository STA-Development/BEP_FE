import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/Button'

import { Content } from './Content'

import aSvg from '~/icons/a.svg'
import rightSvg from '~/icons/right.svg'

const meta: Meta<typeof Content> = {
  title: 'Components/Content',
  component: Content,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Content>

export const Default: Story = {
  args: {
    img: aSvg,
    title: 'Business and Education Partnership Foundation',
    desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed.',
    button: (
      <Button
        size="lg"
        rightIcon={rightSvg}
      >
        Start now
      </Button>
    ),
  },
}
