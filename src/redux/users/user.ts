import { createSlice } from '@reduxjs/toolkit'

import { getInitialState } from './initialState'
import reducers from './reducers'

const user = createSlice({
  name: 'users',
  initialState: getInitialState(),
  reducers,
})

export default user
