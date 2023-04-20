import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'

export const getInitialState = (): ISupportProps => ({
  support: {
    error: null,
    isHelpLoading: false,
    isContactUsLoading: false,
    contactUsStatus: null,
    isHelpMessageSuccess: false,
  },
})
