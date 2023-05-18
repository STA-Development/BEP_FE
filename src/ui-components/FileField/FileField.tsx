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
  const { field } = useController({ name: fieldName })

  return (
    <div>
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
    </div>
  )
}

export default FileField
