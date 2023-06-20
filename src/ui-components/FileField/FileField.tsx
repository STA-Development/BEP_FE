import React, { FC, RefObject } from 'react'
import { useController, useFormContext } from 'react-hook-form'
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
  const { control, setValue, watch } = useFormContext()
  const { field, fieldState } = useController({ name: fieldName, control })

  const handelSetFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleFileChange) {
      if (multiple) {
        handleFileChange(event)

        if (event.target.files) {
          const imageFile = event.target.files
          const image = [...watch(fieldName), ...imageFile]

          setValue(fieldName, image)
        }
      } else {
        handleFileChange(event)

        if (event.target.files) {
          setValue(fieldName, event.target.files)
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
        onChange={handelSetFile}
        error={fieldState.error ? fieldState.error.message : null}
      />
    </div>
  )
}

export default FileField
