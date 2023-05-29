export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  help: IHelpPropsList
  contactUs: IContactUsPropsList
}

export interface IHelpPropsList {
  error: null | Error | string
  isHelpDataSubmitSuccess: boolean
  isHelpDataSubmitLoading: boolean
}

export interface IContactUsPropsList {
  error: null | Error | string
  isContactUsDataSubmitLoading: boolean
  isContactUsDataSubmitSuccess: boolean
}

export interface IHelpDataProps {
  headline: string
  problem: string
}

export interface IContactUsProps {
  fullName: string
  email: string
  phone: string
  message: string
}
