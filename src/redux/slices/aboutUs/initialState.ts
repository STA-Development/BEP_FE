import { IAboutUsProps } from '@allTypes/reduxTypes/aboutUsStateTypes'

export const getInitialState = (): IAboutUsProps => ({
  aboutUs: {
    isAboutUsLoading: false,
    aboutUsList: [],
    error: null,
    isTeamMemberSubmitSuccess: false,
    individualMember: null,
    isIndividualMemberLoading: false,
  },
})
