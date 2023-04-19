export interface IEventsProps {
  events: IEventsList
}

export interface IEventsList {
  isEventsLoading: boolean
  error: string | null
  eventsList: IEventsListProps[]
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
