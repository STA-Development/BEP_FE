import React, { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Input } from '@uiComponents/Input'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
}

const TextField: FC<ITextFieldProps> = ({ fieldName, type, placeholder }) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name: fieldName, control })

  return (
    <Input
      {...field}
      placeholder={placeholder}
      type={type}
      error={fieldState.error ? fieldState.error.message : null}
    />
  )
}

export default TextField
