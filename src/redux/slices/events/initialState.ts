import { IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'

export const getInitialState = (): IEventsProps => ({
  events: {
    isEventsLoading: false,
    eventsData: [],
    error: '',
    pageSize: 0,
    totalItems: 0,
  },
})
