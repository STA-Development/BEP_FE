import React from 'react'
import { MinusIcon } from '@components/Icons/MinusIcon'
import TextField from '@uiComponents/FormFields/TextField'

const MultipleInput = ({
  fieldName,
  index,
  onRemoveField,
  isMinusButtonVisible,
}: {
  fieldName: string
  index: number
  onRemoveField: (value: number) => void
  isMinusButtonVisible: boolean
}) => (
  <div className=" radius relative rounded bg-primary pb-4 pl-4 pr-6 pt-6 ">
    <div className="absolute right-2 top-2 cursor-pointer">
      {isMinusButtonVisible ? (
        <MinusIcon
          onClick={() => onRemoveField(index)}
          fill="fill-white"
        />
      ) : null}
    </div>
    <div className="grid gap-x-2">
      <div className="col-span-1">
        <TextField fieldName={`${fieldName}[${index}]`} />
      </div>
    </div>
  </div>
)

export default MultipleInput
