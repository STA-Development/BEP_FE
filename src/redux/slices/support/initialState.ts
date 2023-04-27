import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'

export const getInitialState = (): ISupportProps => ({
  support: {
    help: {
      error: null,
      isHelpDataSublittingLoading: false,
      isHelpDataSubmittedSuccess: false,
    },
    contactUs: {
      error: null,
      isContactUsSubmittingLoading: false,
      isContactUsDataSubmittedSuccess: false,
    },
  },
})
