export interface IEventsProps {
  events: IEventsList
  singleEventData: IEventsListProps | null
  isSingleEventLoading: boolean
}

export interface IEventsList {
  isEventsLoading: boolean
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

export interface IEventsListParams {
  page: number
}
