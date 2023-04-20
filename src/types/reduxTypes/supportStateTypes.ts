export interface ISupportProps {
  support: ISupportPropsList
}

export interface ISupportPropsList {
  error: null | Error | string
  isHelpLoading: boolean

  helpStatus: null | number
}

export interface IHelpDataProps {
  headline: string
  problem: string
}
