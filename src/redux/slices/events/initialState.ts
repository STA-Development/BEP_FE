import { IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'

export const getInitialState = (): IEventsProps => ({
  events: {
    isEventsLoading: false,
    isIndividualEventsLoading: false,
    eventsList: [],
    individualEvents: null,
    error: '',
    pageSize: 0,
    totalItems: 0,
  },
})
