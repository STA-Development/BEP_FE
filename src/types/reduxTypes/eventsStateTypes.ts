export interface IEventsProps {
  events: IEventsList
  singleEventData: IEventsListProps | null
}

export interface IEventsList {
  isEventsLoading: boolean
  error: string | null
  eventsList: IEventsListProps[]
  pageSize: number
  totalItems: number
  isSingleEventLoading: boolean
}

export interface IEventsListProps {
  uuid: string
  hasLongParagraph: boolean
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}

export interface IEventsListParams {
  page: number
}
