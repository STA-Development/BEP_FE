import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/Button'

import { Container } from './Container'

import aSvg from '~/icons/a.svg'
import rightSvg from '~/icons/right.svg'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    img: aSvg,
    children: (
      <>
        <h2 className="mb-2.5 text-2xl md:mb-5">Business and Education Partnership Foundation</h2>
        <p className="mb-10 text-lg text-black-light">
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
