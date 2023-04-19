export interface INewsResponse {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}

export interface INewsParams {
  page: number
}

export enum NewsType {
  university = 'University',
  workShot = 'Workshop',
  college = 'College',
}
export interface IIndividualNewsResponse {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}
