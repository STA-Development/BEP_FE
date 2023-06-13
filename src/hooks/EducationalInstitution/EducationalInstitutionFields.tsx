import { useMemo } from 'react'
import { ICreateEducationalInstituteAutocompleteField } from '@axios/educational-institutes/edInstitutesManagerTypes'

interface INewsType {
  University: string
  Workshop: string
  College: string
}

export const useCreateObjectFromArray = (provinces: string[]) => {
  const objectFromArrayFields = useMemo(
    () => provinces.map((item: string, index: number) => ({ name: item, id: index.toString() })),
    [provinces]
  )

  return {
    objectFromArrayFields,
  }
}

export const useCreateObjectFromEnum = (NewsType: INewsType) => {
  const objectFromEnumFields: ICreateEducationalInstituteAutocompleteField[] = useMemo(
    () => Object.keys(NewsType).map((item, index) => ({ name: item, id: index.toString() })),
    [NewsType]
  )

  return {
    objectFromEnumFields,
  }
}
