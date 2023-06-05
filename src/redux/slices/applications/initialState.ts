import { IApplicationsProps } from '@allTypes/reduxTypes/areaSpecializationTypes'

export const getInitialState = (): IApplicationsProps => ({
  applications: {
    isJobSeekerLoading: false,
    isApplicationLoading: false,
    isJobSeekerSubmitSuccess: false,
    applicationsList: null,
    individualApplication: null,
    isOrganizationLoading: false,
    isOrganizationSubmitSuccess: false,
    applicationsPdf: null,
    isChangeIsActiveSuccess: false,
    isJobSeekerApplicationDeleteLoading: false,
    isOrganizationApplicationDeleteLoading: false,
    isOrganizationApplicationLoading: false,
    isJobSeekerApplicationLoading: false,
    isCloneApplicationSuccess: false,
  },
})
