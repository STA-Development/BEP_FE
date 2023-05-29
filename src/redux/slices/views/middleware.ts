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
  removeAllModalsFromList,
  setError,
  resetError,
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

const closeAllModals = () => (dispatch: AppDispatch) => {
  dispatch(removeAllModalsFromList([]))
}

const setToastNotificationPopUpState =
  <P>(value: IOpenedAlert<P>) =>
  (dispatch: AppDispatch) => {
    dispatch(updateToastNotificationState(value))
  }

const setErrorMessage = (value: string) => (dispatch: AppDispatch) => {
  dispatch(setError(value))
}

const resetErrorMessage = () => (dispatch: AppDispatch) => {
  dispatch(resetError(null))
}

export default {
  setRedirectionState,
  activateMenuItem,
  openMenuDrawer,
  openModal,
  closeModal,
  setToastNotificationPopUpState,
  closeAllModals,
  setErrorMessage,
  resetErrorMessage,
}
