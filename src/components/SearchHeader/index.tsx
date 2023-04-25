import React, { useState } from 'react'
import { FilterIcon } from '@components/Icons/FilterIcon'
import SearchResult from '@components/Search'
import { Button } from '@uiComponents/Button'

export const SearchHeader = () => {
  const [active, setActive] = useState(true)

  const openFilter = () => {
    setActive(!active)
  }

  return (
    <div className="border-b border-gray-thin py-5 xl:py-10">
      <div className="flex flex-col xl:mb-5 xl:flex-row xl:justify-between">
        <h1 className="text-xl">Educational Institutes</h1>
        <div className="flex flex-row items-center justify-between">
          <p className="text-base text-black-light">Home / Master</p>
          <Button
            variant="text"
            onClick={openFilter}
            LeftIcon={FilterIcon}
            className="xl:hidden"
          >
            <p>{`${!active ? `Open Filters` : `Close Filters`}`}</p>
          </Button>
        </div>
      </div>
      <div className="w-full xl:hidden">
        <div
          className={`w-full flex-col items-start xl:flex xl:flex-row ${active ? `flex` : `hidden`}
           `}
        >
          <SearchResult />
        </div>
      </div>

      <div className="mt-4 hidden w-full flex-col items-center justify-center xl:flex">
        <SearchResult />
      </div>
    </div>
  )
}

export default SearchHeader
