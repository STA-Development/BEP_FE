import { IApplicationsProps } from '@allTypes/reduxTypes/areaSpecializationTypes'

export const getInitialState = (): IApplicationsProps => ({
  applications: {
    jobSeeker: {
      isJobSeekerLoading: false,
      error: null,
      isJobSeekerSubmitSuccess: false,
    },
    organization: {
      isOrganizationLoading: false,
      error: null,
      isOrganizationSubmitSuccess: false,
    },
  },
})
