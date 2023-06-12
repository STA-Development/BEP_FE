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
  isDeleteEventLoading: boolean
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

export interface ICreateEventParams {
  header: string
  paragraph: string
  imageURL: FileList | File | null
}

export interface IEventsResponse {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}

export interface IChangeEventForm {
  header?: string
  paragraph?: string
  imageURL?: string | File
}

export interface IChangeEventFormProps {
  payload: IChangeEventForm
  uuid: string
}
