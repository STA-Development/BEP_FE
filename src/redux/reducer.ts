import { eventsSlice } from '@redux/slices/events'
import { newsSlice } from '@redux/slices/news'
import { supportSlice } from '@redux/slices/support'
import { usersSlice } from '@redux/slices/users'
import { combineReducers } from 'redux'

import { viewsSlice } from './slices/views'

const reducer = combineReducers({
  views: viewsSlice.reducer,
  users: usersSlice.reducer,
  news: newsSlice.reducer,
  events: eventsSlice.reducer,
  support: supportSlice.reducer,
})

export default reducer
