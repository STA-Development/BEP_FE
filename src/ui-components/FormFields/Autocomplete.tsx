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
  label?: string
  id?: string
}

const AutocompleteField = <T extends IAutoCompleteItem>({
  fieldName,
  items,
  placeholder,
  className,
  inputClasses,
  onChange,
  label,
  id,
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
      label={label}
      id={id}
      error={fieldState.error ? fieldState.error.message : null}
    />
  )
}

export default AutocompleteField
