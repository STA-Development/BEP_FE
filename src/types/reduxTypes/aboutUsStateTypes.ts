export interface IAboutUsProps {
  aboutUs: IAboutUs
}

export interface IAboutUs {
  isAboutUsLoading: boolean
  aboutUsList: IAboutUsListProps[]
  error: null | string | Error
  isTeamMemberSubmitSuccess: boolean
  individualMember: IAboutUsListProps | null
  isIndividualMemberLoading: boolean
}

export interface IAboutUsListProps {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  imageDescription: string
}

export interface ICreateTeamMember {
  header?: string
  paragraph?: string
  imageDescription?: string
  imageURL?: File | null | string
}
