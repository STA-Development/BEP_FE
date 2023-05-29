import { ModalName } from '@allTypes/modals'
import {
  IOpenedAlert,
  IOpenedModal,
  RedirectionProps,
  ViewsProps,
} from '@allTypes/reduxTypes/viewsStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<ViewsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setRedirection(state, action: IAction<RedirectionProps>) {
    state.redirection = action.payload
  },
  setMenuActiveItem(state, action: IAction<string[]>) {
    state.menu.openItem = action.payload
  },
  setMenuOpenDrawer(state, action: IAction<boolean>) {
    state.menu.drawerOpen = action.payload
  },
  addModalToList<P>(state: ViewsProps, action: IAction<IOpenedModal<P>>) {
    state.modals.push(action.payload)
  },
  removeModalFromList(state: ViewsProps, action: IAction<ModalName>) {
    state.modals = state.modals.filter((modal) => modal.name !== action.payload)
  },
  removeAllModalsFromList<P>(state: ViewsProps, action: IAction<IOpenedModal<P>[]>) {
    state.modals = action.payload
  },
  updateToastNotificationState<P>(state: ViewsProps, action: IAction<IOpenedAlert<P>>) {
    state.toastNotificationPopUp = action.payload ? action.payload : { open: false, props: {} }
  },
  setError(state: ViewsProps, action: IAction<string>) {
    state.error.error = action.payload
  },
  resetError(state: ViewsProps, action: IAction<null>) {
    state.error.error = action.payload
  },
})

export default reducers
