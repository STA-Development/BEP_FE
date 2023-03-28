import React from 'react'
import { ModalName } from '@allTypes/modals'
import { IOpenedModal } from '@allTypes/reduxTypes/viewsStateTypes'
import { AddApplicationModal } from '@components/Modals/Application/AddApplicationModal'
import { DeleteApplicationModal } from '@components/Modals/Application/DeleteApplicationModal'
import { useAppSelector } from '@redux/hooks'
import { viewsSelector } from '@redux/slices/views'

// Application
const getAddApplicationModal = (modal: IOpenedModal<null>) => (
  <AddApplicationModal key={modal.name} />
)
const getDeleteApplicationModal = (modal: IOpenedModal<null>) => (
  <DeleteApplicationModal key={modal.name} />
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
          default:
            return null
        }
      })}
    </>
  )
}
