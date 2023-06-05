import { IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'

export const getInitialState = (): IEventsProps => ({
  events: {
    isEventsLoading: false,
    eventsList: [],
    pageSize: 0,
    totalItems: 0,
  },
  isSingleEventLoading: false,
  singleEventData: null,
})
