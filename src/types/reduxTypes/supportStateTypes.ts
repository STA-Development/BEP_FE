export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  error: null | string
  isHelpLoading: boolean
}

export interface IHelpDataProps {
  headline: string
  problem: string
}
