import { IEdInstitutesProps } from '@allTypes/reduxTypes/edInstitutesStateTypes'
import {
  IEdInstitutesResponse,
  IFilters,
  IIndividualEducationalInstituteResponse,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IEdInstitutesProps>>(reducer: T) => ({
  ...reducer,
})

const reducers = createReducer<SliceCaseReducers<IEdInstitutesProps>>({
  setEducationalInstitutesList(state, action: IAction<IEdInstitutesResponse[]>) {
    state.edInstitute.edInstitutesList = action.payload
  },
  setIndividualEducationalInstitute(
    state,
    action: IAction<IIndividualEducationalInstituteResponse>
  ) {
    state.individualEduInstitute = action.payload
  },
  setEducationalInstituteListLoading(state, action: IAction<boolean>) {
    state.isIndividualEduInstitutesLoading = action.payload
  },
  setPageSize(state, action: IAction<number>) {
    state.edInstitute.pageSize = action.payload
  },
  setFilters(state, action: IAction<{ page: number; filters: IFilters[] }>) {
    state.filters = action.payload
  },
  setIndividualInstitutesLoadingState(state, action: IAction<boolean>) {
    state.isIndividualEduInstitutesLoading = action.payload
  },
  setTotalItems(state, action: IAction<number>) {
    state.edInstitute.totalItems = action.payload
  },
  setProvinces(state, action: IAction<string[]>) {
    state.provinces = action.payload
  },
  setCreateIndividualInstitutes(state, action: IAction<boolean>) {
    state.iCreateIndividualInstitutesSuccess = action.payload
  },
  setChangeIndividualInstitutes(state, action: IAction<boolean>) {
    state.iChangeIndividualInstitutesSuccess = action.payload
  },
})

export default reducers
