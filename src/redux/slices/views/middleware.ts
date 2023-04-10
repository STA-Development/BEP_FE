import { ModalName } from '@allTypes/modals'
import { IOpenedAlert, IOpenedModal, RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import { IExampleListParams } from '@axios/example/managerExampleTypes'
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

//  TODO: remove this after first API implementation
const getExampleValue = (params: IExampleListParams) => async (dispatch: AppDispatch) => {
  console.log(params)

  try {
    // Set loading state to true

    // const response = await API.example.getExampleValue(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))

    // console.log(response)
    //   Do Something with received data
  } catch (error) {
    // DO something in error case
  } finally {
    //  Set loading state to false
  }
}

export default {
  setRedirectionState,
  activateMenuItem,
  getExampleValue,
  openMenuDrawer,
  openModal,
  closeModal,
  setToastNotificationPopUpState,
  closeAllModals,
}
