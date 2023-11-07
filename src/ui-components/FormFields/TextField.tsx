import React, { ChangeEvent, FC, useEffect, useRef } from 'react'
import { useController } from 'react-hook-form'
import { Input } from '@uiComponents/Input'

export interface ITextFieldProps {
  fieldName: string
  type?: string
  placeholder?: string
  rows?: number
  scrollToError?: boolean
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
  scrollToError,
}) => {
  const { field, fieldState } = useController({ name: fieldName })
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollToError && fieldState.error && scrollRef.current) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }
  }, [fieldState, fieldState.error, scrollToError])

  return (
    <div ref={scrollRef}>
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
    </div>
  )
}

export default TextField
