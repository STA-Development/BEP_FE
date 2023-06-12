import { IAboutUsProps } from '@allTypes/reduxTypes/aboutUsStateTypes'

export const getInitialState = (): IAboutUsProps => ({
  aboutUs: {
    isAboutUsLoading: false,
    aboutUsList: [],
    isTeamMemberSubmitSuccess: false,
    individualMember: null,
    isIndividualMemberLoading: false,
    isChangeTeamMemberSubmitSuccess: false,
  },
})
