import { useMemo } from 'react'
import { ICreateEducationalInstituteAutocompleteField } from '@axios/educational-institutes/edInstitutesManagerTypes'
import { NewsType } from '@axios/news/newsManagerTypes'
import { useAppSelector } from '@redux/hooks'
import { educationalInstitutesSelector } from '@redux/slices/educational-instutions'

export const useEducationalInstitutionFields = () => {
  const provinces = useAppSelector(educationalInstitutesSelector.provinces)

  const provincesTypes: ICreateEducationalInstituteAutocompleteField[] = useMemo(
    () => provinces.map((item, index) => ({ name: item, id: index.toString() })),
    [provinces]
  )

  const EducationalInstitution: ICreateEducationalInstituteAutocompleteField[] = useMemo(
    () => Object.values(NewsType).map((item, index) => ({ name: item, id: index.toString() })),
    []
  )

  return {
    provincesTypes,
    EducationalInstitution,
  }
}
