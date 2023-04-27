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

export const Study = ({ nextTab }: IStudyStepProps) => (
  <div>
    <div className="mb-5 w-full">
      <Autocomplete
        items={people}
        placeholder="University / College"
      />
    </div>
    <div className="mb-5 w-full">
      <Autocomplete
        items={people}
        placeholder="Degree"
      />
    </div>
    <div className="mb-5 w-full">
      <Autocomplete
        items={people}
        placeholder="Faculty"
      />
    </div>
    <div className="mb-5 w-full">
      <Input
        type="number"
        color="secondary"
        placeholder="Student Code *"
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
