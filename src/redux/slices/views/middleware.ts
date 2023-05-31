import { ModalName } from '@allTypes/modals'
import { IOpenedAlert, IOpenedModal, RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setRedirection,
  setMenuActiveItem,
  setMenuOpenDrawer,
  addModalToList,
  removeModalFromList,
  updateToastNotificationState,
} = slice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

const activateMenuItem = (value: string[]) => (dispatch: AppDispatch) => {
  dispatch(setMenuActiveItem(value))
}

const openMenuDrawer = (value: boolean) => (dispatch: AppDispatch) => {
  dispatch(setMenuOpenDrawer(value))
}

const openModal =
  <P>(value: IOpenedModal<P>) =>
  (dispatch: AppDispatch) => {
    dispatch(addModalToList(value))
  }

const closeModal = (name: ModalName) => (dispatch: AppDispatch) => {
  dispatch(removeModalFromList(name))
}

const setToastNotificationPopUpState =
  <P>(value: IOpenedAlert<P>) =>
  (dispatch: AppDispatch) => {
    dispatch(updateToastNotificationState(value))
  }

export default {
  setRedirectionState,
  activateMenuItem,
  openMenuDrawer,
  openModal,
  closeModal,
  setToastNotificationPopUpState,
}
