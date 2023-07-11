export interface IAboutUsProps {
  aboutUs: IAboutUs
}

export interface IAboutUs {
  isAboutUsLoading: boolean
  aboutUsList: IAboutUsListProps[]
  isTeamMemberSubmitSuccess: boolean
  individualMember: IAboutUsListProps | null
  isIndividualMemberLoading: boolean
  isChangeTeamMemberSubmitSuccess: boolean
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
  imageURL?: FileList
}

export interface IChangeMemberFormProps {
  payload: ICreateTeamMember
  uuid: string
}

export interface IMemberFormData {
  header: string
  paragraph: string
  imageURL: string | File
  imageDescription: string
}
export interface IChangeMemberInfoFormKey {
  [key: string]: string | File
}
