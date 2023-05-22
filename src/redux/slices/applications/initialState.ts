import { IApplicationsProps } from '@allTypes/reduxTypes/areaSpecializationTypes'

export const getInitialState = (): IApplicationsProps => ({
  applications: {
    isJobSeekerLoading: false,
    isApplicationLoading: false,
    error: null,
    isJobSeekerSubmitSuccess: false,
    applicationsList: null,
    individualApplication: null,
    isOrganizationLoading: false,
    isOrganizationSubmitSuccess: false,
  },
})
