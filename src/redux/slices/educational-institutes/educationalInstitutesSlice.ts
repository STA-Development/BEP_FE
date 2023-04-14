import {
  EducationalInstitutesState,
  initialEducationalInstitutesState,
} from '@redux/slices/educational-institutes/initialState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const educationalInstitutesSlice = createSlice({
  name: 'educationalInstitutes',
  initialState: initialEducationalInstitutesState,
  reducers: {
    setPage: (state: EducationalInstitutesState, action: PayloadAction<string>) => {
      state.page = action.payload
    },
  },
})
