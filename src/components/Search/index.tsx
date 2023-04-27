import React from 'react'
import { useTranslation } from 'react-i18next'
import { SearchIcon } from '@components/Icons/SearchIcon'
import { Translation } from '@constants/translations'
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

const SearchResult = () => {
  const [t] = useTranslation()

  return (
    <div className="inline-grid w-full grid-cols-1  xl:grid-cols-5">
      <div className="rounded-l-[10px] py-2.5 text-start text-base xl:border">
        <p className="flex justify-start xl:px-5">
          {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_TITLE_SPECIALIZATION)}
        </p>
      </div>
      <div className="xl:border">
        <Autocomplete
          items={people}
          placeholder={t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_SPECIALIZATION)}
          inputClasses="border-none pl-0 xl:px-5"
        />
      </div>
      <div className="xl:border">
        <Autocomplete
          items={people}
          placeholder={t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_PROVINCE)}
          inputClasses="border-none pl-0 xl:pl-5 text-black"
        />
      </div>
      <div className="xl:border">
        <Autocomplete
          items={people}
          placeholder={t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_REGION)}
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
          {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_SEARCH)}
        </Button>
      </div>
    </div>
  )
}

export default SearchResult
