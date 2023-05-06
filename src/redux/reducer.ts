import { aboutUsSlice } from '@redux/slices/aboutUs'
import { applicationsSlice } from '@redux/slices/applications'
import { eventsSlice } from '@redux/slices/events'
import { newsSlice } from '@redux/slices/news'
import { supportSlice } from '@redux/slices/support'
import { usersSlice } from '@redux/slices/users'
import { combineReducers } from 'redux'

import { educationalInstitutesSlice } from './slices/educational-instutions'
import { viewsSlice } from './slices/views'

const reducer = combineReducers({
  views: viewsSlice.reducer,
  users: usersSlice.reducer,
  news: newsSlice.reducer,
  events: eventsSlice.reducer,
  support: supportSlice.reducer,
  educationalInstitutes: educationalInstitutesSlice.reducer,
  aboutUs: aboutUsSlice.reducer,
  applications: applicationsSlice.reducer,
})

export default reducer
