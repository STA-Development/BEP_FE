import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'

export const getInitialState = (): ISupportProps => ({
  support: {
    help: {
      error: null,
      isHelpDataSubmitLoading: false,
      isHelpDataSubmitSuccess: false,
    },
    contactUs: {
      error: null,
      isContactUsDataSubmitLoading: false,
      isContactUsDataSubmitSuccess: false,
    },
  },
})
