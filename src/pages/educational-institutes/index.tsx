import React from 'react'
import { IndividualPage } from '@components/IndividualPage'
import SearchHeader from '@components/SearchHeader'

export const SearchPage = () => (
  <div className="flex w-full flex-col items-center justify-center">
    <SearchHeader />
    <IndividualPage />
    <IndividualPage />
    <IndividualPage />
  </div>
)

export default SearchPage
