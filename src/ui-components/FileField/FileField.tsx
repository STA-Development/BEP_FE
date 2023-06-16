import React, { FC, RefObject } from 'react'
import { useController, useFieldArray } from 'react-hook-form'
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
  multiple?: boolean
}

const FileField: FC<ITextFieldProps> = ({ fieldName, inputRef, handleFileChange, multiple }) => {
  const { field, fieldState } = useController({ name: fieldName })
  const { append } = useFieldArray({ name: fieldName })

  const handelSetFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleFileChange) {
      if (multiple) {
        handleFileChange(event)

        if (event.target.files) {
          append(event.target.files)
        }
      } else {
        handleFileChange(event)

        if (event.target.files) {
          field.onChange(event.target.files)
        }
      }
    }
  }

  return (
    <div>
      <ImageInput
        {...field}
        inputRef={inputRef}
        type="file"
        multiple={multiple}
        onChange={(event) => handelSetFile(event)}
        error={fieldState.error ? fieldState.error.message : null}
      />
    </div>
  )
}

export default FileField
