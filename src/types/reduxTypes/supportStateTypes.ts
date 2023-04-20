export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  error: null | Error | string
  isHelpLoading: boolean

  isHelpMessageSuccess: boolean
}

export interface IHelpDataProps {
  headline: string
  problem: string
}
