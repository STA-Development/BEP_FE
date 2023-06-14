import { IAboutUsListProps, IAboutUsProps } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IAboutUsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setAboutLoading(state, action: IAction<boolean>) {
    state.aboutUs.isAboutUsLoading = action.payload
  },

  setAboutList(state, action: IAction<IAboutUsListProps[]>) {
    state.aboutUs.aboutUsList = action.payload
  },
  setCreateTeamMemberSubmitSuccess(state, action: IAction<boolean>) {
    state.aboutUs.isTeamMemberSubmitSuccess = action.payload
  },
  setIndividualMemberLoading(state, action: IAction<boolean>) {
    state.aboutUs.isIndividualMemberLoading = action.payload
  },
  setIndividualMember(state, action: IAction<IAboutUsListProps>) {
    state.aboutUs.individualMember = action.payload
  },
  setChangeTeamMemberSubmitSuccess(state, action: IAction<boolean>) {
    state.aboutUs.isChangeTeamMemberSubmitSuccess = action.payload
  },
})

export default reducers
