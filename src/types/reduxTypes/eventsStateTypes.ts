export interface IEventsProps {
  events: IEvents
}

export interface IEvents {
  isEventsLoading: boolean
  error: string
  eventsData: IEventsDataType[]
  pageSize: number
}

export interface IEventsDataType {
  hasLongParagraph: boolean
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
  id?: string
}
