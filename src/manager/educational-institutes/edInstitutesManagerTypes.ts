export interface IEdInstitutesResponse {
  uuid: string
  name: string
  address: string
  phone: string
  email: string
  subtitle: string
  imageURL: string
}
export interface IIndividualEducationalInstituteResponse {
  uuid: string
  name: string
  subtitle: string
  type: string
  imageURLs: string[]
  description: string
  address: string
  phone: string
  email: string
  status: {
    code: string
    message: null
  }
}
