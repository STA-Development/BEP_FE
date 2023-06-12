import { IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'

export const getInitialState = (): IEventsProps => ({
  events: {
    isEventsLoading: false,
    eventsList: [],
    pageSize: 0,
    totalItems: 0,
    isDeleteEventLoading: false,
  },
  isSingleEventLoading: false,
  singleEventData: null,
})
