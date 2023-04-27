import React, { MouseEventHandler } from 'react'
import { Autocomplete } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

interface Person {
  id: string
  name: string
}

interface IStudyStepProps {
  nextTab: MouseEventHandler<HTMLButtonElement>
}

const people: Person[] = [
  { id: '1', name: 'Durward Reynolds' },
  { id: '2', name: 'Kenton Towne' },
  { id: '3', name: 'Therese Wunsch' },
  { id: '4', name: 'Benedict Kessler' },
  { id: '5', name: 'Katelyn Rohan' },
]

export const AddresDetails = ({ nextTab }: IStudyStepProps) => (
  <div>
    <div className="mb-5 w-full">
      <Autocomplete
        items={people}
        placeholder="Armenia"
      />
    </div>
    <div className="mb-5 w-full">
      <Input
        type="text"
        placeholder="Province"
        color="secondary"
      />
    </div>
    <div className="mb-5 flex w-full justify-between gap-5">
      <Input
        type="text"
        placeholder="City"
        color="secondary"
      />
      <Input
        type="text"
        placeholder="ZIP Code"
        color="secondary"
      />
    </div>
    <div className="mb-5 w-full">
      <Input
        type="text"
        placeholder="Street, apt./building number *"
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
