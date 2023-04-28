import React, { FC } from 'react'
import { useController } from 'react-hook-form'
import { Input } from '@uiComponents/Input'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
  rows?: number
  label?: string
}

const TextField: FC<ITextFieldProps> = ({ fieldName, type, placeholder, rows, label }) => {
  const { field, fieldState } = useController({ name: fieldName })

  return (
    <Input
      {...field}
      placeholder={placeholder}
      label={label}
      type={type}
      rows={rows}
      error={fieldState.error ? fieldState.error.message : null}
    />
  )
}

export default TextField
