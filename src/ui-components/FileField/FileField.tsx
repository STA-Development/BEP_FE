import React, { FC, RefObject, useRef, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { ImageInput } from '@uiComponents/Input'

import { useFormErrorScroll } from '../../hooks/ErrorScroll/FormErrorScroll'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
  rows?: number
  scrollToError?: boolean
  label?: string
  id?: string
  inputRef?: RefObject<HTMLInputElement>
  handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  multiple?: boolean
  limit?: number
}

const FileField: FC<ITextFieldProps> = ({
  fieldName,
  inputRef,
  handleFileChange,
  multiple,
  limit = 0,
  scrollToError = false,
}) => {
  const [limitError, setLimitError] = useState<string>('')

  const { control, setValue, watch } = useFormContext()
  const { field, fieldState } = useController({ name: fieldName, control })
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [t] = useTranslation()
  const handelSetFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleFileChange) {
      if (multiple) {
        if (event.target.files && event.target.files.length > limit) {
          setLimitError(t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_IMAGE_LENGTH_ERROR) as string)

          return
        }

        setLimitError('')

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

  useFormErrorScroll({
    scrollToError,
    fieldState,
    fieldError: fieldState.error?.message ?? null,
    ref: scrollRef,
  })

  return (
    <div ref={scrollRef}>
      <ImageInput
        {...field}
        inputRef={inputRef}
        type="file"
        multiple={multiple}
        onChange={handelSetFile}
        error={fieldState.error ? fieldState.error.message : null}
      />
      <p className="mt-3 text-base text-red">{limitError}</p>
    </div>
  )
}

export default FileField
