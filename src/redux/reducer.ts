import { combineReducers } from 'redux'

import { viewsSlice } from './slices/views'

const reducer = combineReducers({
  views: viewsSlice.reducer,
})

export default reducer
