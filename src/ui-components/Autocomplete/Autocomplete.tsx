import React, { Fragment, useMemo, useState } from 'react'
import { ChevronIcon } from '@components/Icons'
import { Combobox, Transition } from '@headlessui/react'
import clsxMerge from '@lib/clsxm'

export interface IAutoCompleteItem {
  id: string | number
  name: string
}

interface AutocompleteProps<T> {
  items: T[]
  placeholder?: string
  classes?: string
  inputClasses?: string
  error?: string | null
  onValueChange?: (value: T) => void
  label?: string
  id?: string
}

export const Autocomplete = <T extends IAutoCompleteItem>({
  items,
  placeholder,
  classes,
  inputClasses,
  error,
  onValueChange,
  label,
  id,
  ...rest
}: AutocompleteProps<T>) => {
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(
    () =>
      query === ''
        ? items
        : items.filter((item: T) =>
            item.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          ),
    [items, query]
  )

  const style = clsxMerge(
    'rounded',
    'px-5',
    'py-2.5',
    'outline-0',
    'placeholder:text-black-light',
    'w-full',
    'border-2',
    [error ? 'border-red placeholder:text-red' : 'focus:border-primary placeholder:text-black']
  )

  return (
    <Combobox {...rest}>
      {({ open }) => (
        <div className={`relative ${classes}`}>
          {label ? (
            <label
              htmlFor={id}
              className="text-sm text-black-light"
            >
              {label}
            </label>
          ) : null}
          <div className="relative mt-2 w-full cursor-default overflow-hidden focus:outline-none">
            <Combobox.Input
              className={`${
                open ? 'rounded-t' : 'rounded'
              } w-full border border-gray-thin px-5 py-2.5 pr-10 text-base text-black outline-none placeholder:text-base placeholder:text-black ${style} ${inputClasses}`}
              displayValue={(item: IAutoCompleteItem) => item?.name}
              placeholder={placeholder}
              onChange={(event) => setQuery(event.target.value)}
              id={id}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-5">
              <ChevronIcon className="rotate-90 transform" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-10 max-h-60 w-full overflow-auto rounded-b border border-t-0 border-gray-thin bg-white shadow-lg">
              {!filteredItems.length && query !== '' ? (
                <div className="relative cursor-default select-none px-5 py-2.5 text-base">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className="relative cursor-pointer select-none border-b border-gray-thin px-5 py-2.5 text-base"
                    value={item}
                  >
                    <span className="block truncate">{item.name}</span>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
          {error ? <p className="mt-2.5 text-xs text-red">{error}</p> : null}
        </div>
      )}
    </Combobox>
  )
}
