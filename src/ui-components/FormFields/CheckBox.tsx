import React, { ChangeEvent, FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { InputCheckbox } from '@uiComponents/Input'

export interface ICheckBoxProps {
  fieldName: string
  id?: string
  label?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Checkbox: FC<ICheckBoxProps> = ({ fieldName, className, label, id, onChange }) => {
  const { control, watch } = useFormContext()
  const { field } = useController({ name: fieldName, control })

  const isChecked = watch(fieldName)

  return (
    <InputCheckbox
      {...field}
      onChange={onChange ?? field.onChange}
      checked={isChecked}
      label={label}
      className={className}
      id={id}
    />
  )
}

export default Checkbox
