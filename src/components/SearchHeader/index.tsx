import React, { useState } from 'react'
import { FilterIcon } from '@components/Icons/FilterIcon'
import { SearchIcon } from '@components/Icons/SearchIcon'
import { Autocomplete } from '@uiComponents/Autocomplete'

interface Person {
  id: string
  name: string
}

const people: Person[] = [
  { id: '1', name: 'Durward Reynolds' },
  { id: '2', name: 'Kenton Towne' },
  { id: '3', name: 'Therese Wunsch' },
  { id: '4', name: 'Benedict Kessler' },
  { id: '5', name: 'Katelyn Rohan' },
]

export const SearchHeader = () => {
  const [active, setActive] = useState(false)

  const openFilter = () => {
    setActive(!active)
  }

  return (
    <>
      <div className="mt-4 flex w-3/4 flex-col items-center justify-center">
        <div className="flex w-full flex-row flex-wrap">
          <div className="flex w-full flex-row justify-start xl:w-1/2">
            <p className="text-lg font-normal">Educational Institutes</p>
          </div>
          <div className="flex w-1/2 flex-row justify-start xl:w-1/2 xl:justify-end">
            <p className="mx-1 cursor-pointer">Home</p>
            <p>/</p>
            <p className="mx-1 cursor-pointer">Masters</p>
          </div>
          <div className="flex w-1/2 flex-row justify-end text-[#326789] xl:hidden ">
            <button
              type="button"
              className="mx-1 flex cursor-pointer flex-row"
              onClick={openFilter}
              aria-label={`${!active ? `Open Filters` : `Close Filters`}`}
            >
              <FilterIcon />
              {`${!active ? `Open Filters` : `Close Filters`}`}
            </button>
          </div>
        </div>

        <div
          className={`w-full flex-col py-4 xl:flex xl:flex-row ${active ? `flex` : `hidden`}
           `}
        >
          <div
            className="flex w-full flex-row border-[.5px] border-gray-700
                py-4 px-1 xl:w-1/5"
          >
            <p className="flex items-center justify-center pl-4">Specialization</p>
          </div>

          <div
            className="flex w-full flex-row border-[.5px]
                border-gray-700 xl:w-1/5 xl:items-center xl:justify-center"
          >
            <Autocomplete
              inputClasses="border-none"
              classes="w-full"
              items={people}
              placeholder="Specialization"
            />
          </div>

          <div
            className="flex w-full flex-row border-[.5px]
                border-gray-700 xl:w-1/5 xl:items-center xl:justify-center"
          >
            <Autocomplete
              inputClasses="border-none"
              classes="w-full"
              items={people}
              placeholder="Specialization"
            />
          </div>
          <div
            className="flex w-full flex-row border-[.5px]
                border-gray-700 xl:w-1/5 xl:items-center xl:justify-center"
          >
            <Autocomplete
              inputClasses="border-none"
              classes="w-full"
              items={people}
              placeholder="Specialization"
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-start rounded-none bg-[#326789]
                 py-4 text-sm font-normal
                 text-white xl:w-32"
          >
            <p className="flex justify-start px-4">Search</p>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-center py-8">
        <div className="h-auto w-3/4 border-t-2" />
      </div>
    </>
  )
}

export default SearchHeader
