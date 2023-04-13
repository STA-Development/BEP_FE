export interface IEventsProps {
  events: IEvents
}

export interface IEvents {
  isEventsLoading: boolean
  error: string
  eventsData: IEventsDataType[]
  pageSize: number
  totalItems: number
}

export interface IEventsDataType {
  id: string
  hasLongParagraph: boolean
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}
