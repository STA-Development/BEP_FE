import React from 'react'
import { Button } from '@components/Button'
import { AgreementIcon, RightIcon } from '@components/Icons'
import { BusinessDealIcon } from '@components/Icons/BusinessDeal'
import type { Meta, StoryObj } from '@storybook/react'

import { Introduction } from './Introduction'

const meta: Meta<typeof Introduction> = {
  title: 'Components/Introduction',
  component: Introduction,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Introduction>

export const First: Story = {
  args: {
    img: <BusinessDealIcon />,
    title: 'Business and Education Partnership Foundation',
    desc: 'Lorem ipsum dolor sit amet consectetur. Massa sed.',
    button: (
      <Button
        size="lg"
        rightIcon={<RightIcon />}
      >
        Start now
      </Button>
    ),
  },
}
export const Second: Story = {
  args: {
    img: <AgreementIcon />,
    title: 'What is BEP?',
    desc:
      '“Business and Education Partnership” Foundation has been implementing the activities aimed\n' +
      '          at supporting the sustainable development and enhancement of the Armenian education system\n' +
      '          through introduction of innovative education models and mechanisms based on advanced\n' +
      '          international experience, as well as providing an assistance to the result-oriented\n' +
      '          process of vocational training.',
    button: (
      <Button
        size="lg"
        rightIcon={<RightIcon />}
      >
        Fill the form
      </Button>
    ),
  },
}
