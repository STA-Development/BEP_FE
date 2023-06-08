import React, { ChangeEvent, FC } from 'react'
import { useController } from 'react-hook-form'
import { Input } from '@uiComponents/Input'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
  rows?: number
  label?: string
  id?: string
  className?: string
  onChange?: (value: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
}

const TextField: FC<ITextFieldProps> = ({
  fieldName,
  type,
  placeholder,
  rows,
  label,
  id,
  className,
  onChange,
}) => {
  const { field, fieldState } = useController({ name: fieldName })

  return (
    <Input
      {...field}
      placeholder={placeholder}
      className={className}
      label={label}
      id={id}
      type={type}
      rows={rows}
      onChange={onChange ?? field.onChange}
      error={fieldState.error ? fieldState.error.message : null}
    />
  )
}

export default TextField
