import React, { useEffect, useState } from 'react'
import educationalInstitutesManager from '@axios/core/educational-institutes/educational-institutesManager'
import { EducationalInstitutesParams } from '@axios/core/educational-institutes/educational-institutesManagerTypes'
import SearchHeader from '@components/SearchHeader'
import { EducationalInstitutesCard } from 'src/components/EducationalInstitutesCard'

interface EducationalInstitute {
  id: number
  // Other properties of the institute
}

const SearchPage = () => {
  const [educationalInstitutes, setEducationalInstitutes] = useState<EducationalInstitute[]>([])

  useEffect(() => {
    // Fetch educational institutes data from backend
    const params: EducationalInstitutesParams = { page: '1' }

    educationalInstitutesManager
      .educationalInstitutes(params)
      .then((response) => {
        if (response.data) {
          setEducationalInstitutes(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // Create an array with three elements to render three instances of the EducationalInstitutesCard component
  const emptyInstitutes = [0, 1, 2]

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SearchHeader />
      {educationalInstitutes.length > 0
        ? educationalInstitutes.map((institute) => (
            <EducationalInstitutesCard
              key={institute.id}
              {...institute}
            />
          ))
        : emptyInstitutes.map((index) => <EducationalInstitutesCard key={index} />)}
    </div>
  )
}

export default SearchPage
