import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.educationalInstitutes

export const educationalInstitutesData = createSelector([selector], (state) => state.edInstitute)

export const individualEduInstitute = createSelector(
  [selector],
  (state) => state.individualEduInstitute
)

export const isIndividualEduInstituteLoading = createSelector(
  [selector],
  (state) => state.isIndividualEduInstitutesLoading
)

export default {
  educationalInstitutesData,
  individualEduInstitute,
  isIndividualEduInstituteLoading,
}
