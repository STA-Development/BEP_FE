import { IApplicationsProps } from '@allTypes/reduxTypes/areaSpecializationTypes'

export const getInitialState = (): IApplicationsProps => ({
  applications: {
    isJobSeekerLoading: false,
    error: null,
    isJobSeekerSubmitSuccess: false,
  },
})
