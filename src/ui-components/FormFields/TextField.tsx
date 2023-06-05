import React, { FC } from 'react'
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
}

const TextField: FC<ITextFieldProps> = ({
  fieldName,
  type,
  placeholder,
  rows,
  label,
  id,
  className,
}) => {
  const { field, fieldState } = useController({ name: fieldName })

  return (
    <div>
      <Input
        {...field}
        placeholder={placeholder}
        className={className}
        label={label}
        id={id}
        type={type}
        rows={rows}
        error={fieldState.error ? fieldState.error.message : null}
      />
    </div>
  )
}

export default TextField
