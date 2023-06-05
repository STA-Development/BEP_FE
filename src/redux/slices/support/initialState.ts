import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'

export const getInitialState = (): ISupportProps => ({
  support: {
    help: {
      isHelpDataSubmitLoading: false,
      isHelpDataSubmitSuccess: false,
    },
    contactUs: {
      isContactUsDataSubmitLoading: false,
      isContactUsDataSubmitSuccess: false,
    },
  },
})
