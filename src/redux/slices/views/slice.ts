import { createSlice } from '@reduxjs/toolkit'

import { getInitialState } from './initialState'
import reducers from './reducers'

const slice = createSlice({
  name: 'views',
  initialState: getInitialState(),
  reducers,
})

export default slice
