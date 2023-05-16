import React, { Fragment } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Listbox, Transition } from '@headlessui/react'

export interface ISelectItem {
  id: number
  name: string
}

interface SelectProps {
  items: ISelectItem[]
  fieldName: string
  individualValue?: string | null
}

export const Select = ({ items, fieldName, individualValue }: SelectProps) => {
  const { control } = useFormContext()
  const { field } = useController({ name: fieldName, control })

  return (
    <div>
      <Listbox
        defaultValue={individualValue ?? items[0].name}
        {...field}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg border-2 border-gray-thin bg-white py-2 pl-3 pr-10 text-left">
            <span className="block truncate">{field.value ? field.value : items[0].name}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="sm:text-sm absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map((item: ISelectItem) => (
                <Listbox.Option
                  key={item.id}
                  value={item.name}
                  className={({ active }) =>
                    `relative z-20 cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                >
                  {(selected) => (
                    <div>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {item.name}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
