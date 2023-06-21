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
  University = 'University',
  Workshop = 'Workshop',
  College = 'College',
}
export interface IIndividualNewsResponse {
  uuid?: string
  header: string
  paragraph: string
  imageURL: string
  postedAt?: string
}
