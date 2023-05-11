import React from 'react'
import { useController } from 'react-hook-form'
import { Autocomplete, IAutoCompleteItem } from '@uiComponents/Autocomplete'

export interface IAutocompleteProps<T> {
  fieldName: string
  placeholder?: string
  className?: string
  inputClasses?: string
  items: T[]
  onChange?: (value: T) => void
}

const AutocompleteField = <T extends IAutoCompleteItem>({
  fieldName,
  items,
  placeholder,
  className,
  inputClasses,
  onChange,
}: IAutocompleteProps<T>) => {
  const { field, fieldState } = useController({ name: fieldName })

  return (
    <Autocomplete
      {...field}
      onValueChange={onChange}
      placeholder={placeholder}
      items={items}
      inputClasses={inputClasses}
      classes={className}
      error={fieldState.error ? fieldState.error.message : null}
    />
  )
}

export default AutocompleteField
