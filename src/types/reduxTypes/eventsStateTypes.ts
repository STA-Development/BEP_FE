export interface IEventsProps {
  events: IEventsList
}

export interface IEventsList {
  isEventsLoading: boolean
  isIndividualEventsLoading: boolean
  error: null | string
  eventsList: IEventsListProps[]
  individualEvents: IIndividualEventsProps | null
  pageSize: number
  totalItems: number
}

export interface IEventsListProps {
  uuid: string
  hasLongParagraph: boolean
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}

export interface IEventsParams {
  page: number
}

export interface IIndividualEventsProps {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}
