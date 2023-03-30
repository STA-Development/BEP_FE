import React from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { AgreementIcon, RightIcon } from '@components/Icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Content } from './Content'

const meta: Meta<typeof Content> = {
  title: 'Components/Content',
  component: Content,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Content>

export const Default: Story = {
  args: {
    img: <AgreementIcon />,
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
