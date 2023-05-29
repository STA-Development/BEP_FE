import React from 'react'
import { ModalName } from '@allTypes/modals'
import { IOpenedModal } from '@allTypes/reduxTypes/viewsStateTypes'
import { AddApplicationModal } from '@components/Modals/Application/AddApplicationModal'
import {
  DeleteApplicationModal,
  IDeleteApplication,
} from '@components/Modals/Application/DeleteApplicationModal'
import { Error, IErrorModalProps } from '@components/Modals/Error'
import { useAppSelector } from '@redux/hooks'
import { viewsSelector } from '@redux/slices/views'

// Application
const getAddApplicationModal = (modal: IOpenedModal<null>) => (
  <AddApplicationModal key={modal.name} />
)
const getDeleteApplicationModal = (modal: IOpenedModal<IDeleteApplication>) => (
  <DeleteApplicationModal
    key={modal.name}
    {...modal.props}
  />
)
const getErrorMessage = (modal: IOpenedModal<IErrorModalProps>) => (
  <Error
    key={modal.name}
    {...modal.props}
  />
)

export const ModalsController = () => {
  const modals = useAppSelector(viewsSelector.modals)

  return (
    <>
      {modals.map((modal) => {
        switch (modal.name) {
          // Application
          case ModalName.AddApplicationModal:
            return getAddApplicationModal(modal)
          case ModalName.DeleteApplicationModal:
            return getDeleteApplicationModal(modal)
          case ModalName.getErrorMessage:
            return getErrorMessage(modal)
          default:
            return null
        }
      })}
    </>
  )
}
