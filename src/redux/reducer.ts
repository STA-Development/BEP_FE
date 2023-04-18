import { eventsSlice } from '@redux/slices/events'
import { usersSlice } from '@redux/slices/users'
import { combineReducers } from 'redux'

import { viewsSlice } from './slices/views'

const reducer = combineReducers({
  views: viewsSlice.reducer,
  users: usersSlice.reducer,
  events: eventsSlice.reducer,
})

export default reducer
