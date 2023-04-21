export interface IAboutUsProps {
  aboutUs: IAboutUs
}

export interface IAboutUs {
  isAboutUsLoading: boolean
  aboutUsList: IAboutUsListProps[]
  error: null | string | Error
}

export interface IAboutUsListProps {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  imageDescription: string
}
