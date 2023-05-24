import React, { FC, RefObject } from 'react'
import { useController } from 'react-hook-form'
import { ImageInput } from '@uiComponents/Input'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
  rows?: number
  label?: string
  id?: string
  inputRef?: RefObject<HTMLInputElement>
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FileField: FC<ITextFieldProps> = ({ fieldName, inputRef, handleFileChange }) => {
  const { field, fieldState } = useController({ name: fieldName })

  return (
    <div className={`${fieldState.error && 'text-blue'}`}>
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
        error={fieldState.error ? fieldState.error.message : null}
      />
    </div>
  )
}

export default FileField
