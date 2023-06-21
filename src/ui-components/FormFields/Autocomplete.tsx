import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Autocomplete, IAutoCompleteItem } from '@uiComponents/Autocomplete'

export interface IAutocompleteProps<T> {
  fieldName: string
  placeholder?: string
  className?: string
  inputClasses?: string
  items: T[]
  onChange?: (value: T) => void
  error?: string | null
}

const AutocompleteField = <T extends IAutoCompleteItem>({
  fieldName,
  items,
  placeholder,
  className,
  inputClasses,
  onChange,
  error,
}: IAutocompleteProps<T>) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name: fieldName, control })
  const errorMessage = error ?? fieldState?.error?.message

  return (
    <Autocomplete
      {...field}
      onValueChange={onChange}
      placeholder={placeholder}
      items={items}
      inputClasses={inputClasses}
      classes={className}
      error={errorMessage}
    />
  )
}

export default AutocompleteField
