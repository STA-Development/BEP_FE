export interface IEventsProps {
  events: IEvents
}

export interface IEvents {
  isEventsLoading: boolean
  error: string | null
  eventsData: IEventsDataProps[]
  pageSize: number
  totalItems: number
}

export interface IEventsDataProps {
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
