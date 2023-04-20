export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  error: null | Error | string
  isHelpLoading: boolean
  isContactUsLoading: boolean
  contactUsStatus: null | number
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
