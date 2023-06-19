export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  help: IHelpPropsList
  contactUs: IContactUsPropsList
}

export interface IHelpPropsList {
  isHelpDataSubmitSuccess: boolean
  isHelpDataSubmitLoading: boolean
}

export interface IContactUsPropsList {
  isContactUsDataSubmitLoading: boolean
  isContactUsDataSubmitSuccess: boolean
}

export interface IHelpDataProps {
  headline: string
  problem: string
}

export interface IContactUsProps {
  name: string
  email: string
  phone: string
  message: string
}
