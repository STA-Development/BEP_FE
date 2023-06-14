import React from 'react'
import { ModalName } from '@allTypes/modals'
import { IOpenedModal } from '@allTypes/reduxTypes/viewsStateTypes'
import { DeleteTeamMember } from '@components/Modals/AboutUs/DeleteTeamMember'
import { AddApplicationModal } from '@components/Modals/Application/AddApplicationModal'
import {
  DeleteApplicationModal,
  IDeleteApplication,
} from '@components/Modals/Application/DeleteApplicationModal'
import {
  DeleteIndividualEventModal,
  IDeleteIndividualEvent,
} from '@components/Modals/Events/DeleteIndividualEventModal'
import {
  DeleteIndividualNewsModal,
  IDeleteIndividualNews,
} from '@components/Modals/News/DeleteIndividualNewsModal'
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
const getDeleteTeamMember = (modal: IOpenedModal<IDeleteApplication>) => (
  <DeleteTeamMember
    key={modal.name}
    {...modal.props}
  />
)

const getDeleteIndividualNewsModal = (modal: IOpenedModal<IDeleteIndividualNews>) => (
  <DeleteIndividualNewsModal
    key={modal.name}
    {...modal.props}
  />
)

const getDeleteIndividualEventModal = (modal: IOpenedModal<IDeleteIndividualEvent>) => (
  <DeleteIndividualEventModal
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
          case ModalName.DeleteTeamMember:
            return getDeleteTeamMember(modal)
          case ModalName.DeleteIndividualNewsModal:
            return getDeleteIndividualNewsModal(modal)
          case ModalName.DeleteIndividualEventModal:
            return getDeleteIndividualEventModal(modal)
          default:
            return null
        }
      })}
    </>
  )
}
