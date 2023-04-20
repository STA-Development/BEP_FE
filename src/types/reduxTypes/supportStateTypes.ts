export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  help: IHelpPropsList
  contactUs: IContactUsPropsList
}

export interface IHelpPropsList {
  error: null | Error | string
  isHelpLoading: boolean
  isHelpMessageSuccess: boolean
}

export interface IContactUsPropsList {
  error: null | Error | string
  isContactUsLoading: boolean
  isContactUsMessageSuccess: boolean
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
