import { Fragment, useMemo, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { ChevronIcon } from '@/components/Icons'

interface Item {
  id: number
  name: string
}

export type AutocompleteProps = {
  items: Item[]
  placeholder: string
}

export const Autocomplete = ({ items, placeholder }: AutocompleteProps) => {
  const [selected, setSelected] = useState({})
  const [query, setQuery] = useState('')

  const filteredItems = useMemo(
    () =>
      query === ''
        ? items
        : items.filter((item: Item) =>
            item.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          ),
    [items, query]
  )

  return (
    <Combobox
      value={selected}
      onChange={setSelected}
    >
      {({ open }) => (
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden focus:outline-none">
            <Combobox.Input
              className={`${
                open ? 'rounded-t' : 'rounded'
              } w-full border border-gray-thin px-5 py-2.5 pr-10 text-base text-black outline-none placeholder:text-base placeholder:text-black`}
              displayValue={(item: Item) => item.name}
              placeholder={placeholder}
              onChange={(event) => setQuery(event.target.value)}
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
            <Combobox.Options className="absolute z-10 max-h-60 w-full overflow-auto rounded-b border border-t-0 border-gray-thin bg-white">
              {!filteredItems.length && query !== '' ? (
                <div className="relative cursor-default select-none py-2.5 px-5 text-base">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map((item: Item) => (
                  <Combobox.Option
                    key={item.id}
                    className="relative cursor-pointer select-none border-b border-gray-thin py-2.5 px-5 text-base"
                    value={item}
                  >
                    <span className="block truncate">{item.name}</span>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  )
}
