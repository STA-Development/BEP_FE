import React, { FC, RefObject } from 'react'
import { useController } from 'react-hook-form'
import { ImageInput, Input } from '@uiComponents/Input'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
  rows?: number
  label?: string
  id?: string
  className?: string
  inputRef?: RefObject<HTMLInputElement>
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: FC<ITextFieldProps> = ({
  fieldName,
  type,
  placeholder,
  rows,
  label,
  id,
  className,
  inputRef,
  handleFileChange,
}) => {
  const { field, fieldState } = useController({ name: fieldName })

  return (
    <div>
      {type === 'file' ? (
        <ImageInput
          {...field}
          inputRef={inputRef}
          type="file"
          onChange={(event) => {
            if (handleFileChange) {
              handleFileChange(event)
              field.onChange(event.target.files && event.target.files?.[0])
            }
          }}
        />
      ) : (
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
      )}
    </div>
  )
}

export default TextField
