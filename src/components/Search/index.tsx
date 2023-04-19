import React from 'react'
import { SearchIcon } from '@components/Icons/SearchIcon'
import { Autocomplete } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'

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

const SearchResult = () => (
  <div className="inline-grid w-full grid-cols-1  xl:grid-cols-5">
    <div className="rounded-l-[10px] py-2.5 text-start text-base xl:border">
      <p className="flex justify-start xl:px-5">Specialization</p>
    </div>
    <div className="xl:border">
      <Autocomplete
        items={people}
        placeholder="Specialization"
        inputClasses="border-none pl-0 xl:px-5"
      />
    </div>
    <div className="xl:border">
      <Autocomplete
        items={people}
        placeholder="Specialization"
        inputClasses="border-none pl-0 xl:pl-5 text-black"
      />
    </div>
    <div className="xl:border">
      <Autocomplete
        items={people}
        placeholder="Specialization"
        inputClasses="border-none pl-0 xl:pl-5"
      />
    </div>
    <div className="hidden xl:block">
      <Button
        RightIcon={SearchIcon}
        radius="r"
      >
        Search
      </Button>
    </div>
    <div className="mt-5 xl:hidden">
      <Button
        size="lg"
        RightIcon={SearchIcon}
      >
        Search
      </Button>
    </div>
  </div>
)

export default SearchResult
