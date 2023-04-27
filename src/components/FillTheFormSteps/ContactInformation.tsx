import React, { MouseEventHandler } from 'react'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

interface IStudyStepProps {
  nextTab: MouseEventHandler<HTMLButtonElement>
}

export const ContactInformation = ({ nextTab }: IStudyStepProps) => (
  <div>
    <div className="mb-5 w-full">
      <Input
        type="email"
        placeholder="Email"
        color="secondary"
      />
    </div>
    <div className="mb-5 w-full">
      <Input
        type="number"
        placeholder="Mobile phone"
        color="secondary"
      />
    </div>
    <Button
      size="fl"
      onClick={nextTab}
    >
      Next
    </Button>
  </div>
)
