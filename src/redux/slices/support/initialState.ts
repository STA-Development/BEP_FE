import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'

export const getInitialState = (): ISupportProps => ({
  support: {
    help: {
      error: null,
      isHelpLoading: false,
      isHelpMessageSuccess: false,
    },
    contactUs: {
      error: null,
      isContactUsLoading: false,
      isContactUsMessageSuccess: false,
    },
  },
})
