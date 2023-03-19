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
    children: (
      <>
        <h2 className="text-2xl md:mb-5 mb-2.5">Business and Education Partnership Foundation</h2>
        <p className="text-lg mb-10 text-black-light">
          Lorem ipsum dolor sit amet consectetur. Massa sed.
        </p>
        <Button
          size="lg"
          rightIcon={rightSvg}
        >
          Start now
        </Button>
      </>
    ),
  },
}
