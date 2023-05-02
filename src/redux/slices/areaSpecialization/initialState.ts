import { IAreaSpecializationProps } from '@allTypes/reduxTypes/areaSpecializationTypes'

export const getInitialState = (): IAreaSpecializationProps => ({
  jobSeeker: {
    isJobSeekerLoading: false,
    error: null,
    isJobSeekerSubmitSuccess: false,
  },
})
