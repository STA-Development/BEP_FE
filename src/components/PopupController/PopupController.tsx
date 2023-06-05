import React from 'react'
import { IOpenedAlert } from '@allTypes/reduxTypes/viewsStateTypes'
import { Error, IErrorModalProps } from '@components/Popup/Error'
import { useAppSelector } from '@redux/hooks'
import { viewsSelector } from '@redux/slices/views'

const getErrorMessage = (popup: IOpenedAlert<IErrorModalProps>) => <Error {...popup.props} />

export const PopupController = () => {
  const popup = useAppSelector(viewsSelector.toastNotificationPopUp)

  if (popup.open) {
    return getErrorMessage(popup)
  }

  return null
}
