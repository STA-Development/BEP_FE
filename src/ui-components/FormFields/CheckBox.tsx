import React, { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { InputCheckbox } from '@uiComponents/Input'

export interface ICheckBoxProps {
  fieldName: string
  id?: string
  label?: string
}

const Checkbox: FC<ICheckBoxProps> = ({ fieldName, label, id }) => {
  const { control } = useFormContext()
  const { field } = useController({ name: fieldName, control })

  return (
    <InputCheckbox
      {...field}
      label={label}
      id={id}
    />
  )
}

export default Checkbox
