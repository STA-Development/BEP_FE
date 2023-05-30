import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { CloseIcon } from '@components/Icons'
import { Modal } from '@components/Modals'
import { Translation } from '@constants/translations'
import { Dialog } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware, applicationsSelector } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

export interface IDeleteApplication {
  id: string
}

export const DeleteApplicationModal = ({ id }: IDeleteApplication) => {
  const [t] = useTranslation()

  const { role } = useAppSelector(usersSelector.user)

  const { isJobSeekerApplicationDeleteLoading, isOrganizationApplicationDeleteLoading } =
    useAppSelector(applicationsSelector.applications)

  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.DeleteApplicationModal))
  }, [])

  const onDelete = () => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.deleteJobSeekerApplication(id))
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.deleteOrganizationApplication(id))
    }

    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className="mb-5 flex items-start justify-between">
        <Dialog.Title className="text-base">
          <p>{t(Translation.MODAL_DELETE_APPLICATION_TITLE)}</p>
          <p>{t(Translation.MODAL_DELETE_APPLICATION_DESCRIPTION)}</p>
        </Dialog.Title>
        <Button
          variant="text"
          size="xs"
          onClick={onClose}
        >
          <CloseIcon fill="fill-black" />
        </Button>
      </div>

      <div className="flex gap-10">
        <Button
          disabled={isJobSeekerApplicationDeleteLoading || isOrganizationApplicationDeleteLoading}
          isLoading={isJobSeekerApplicationDeleteLoading || isOrganizationApplicationDeleteLoading}
          size="fl"
          onClick={onDelete}
        >
          {t(Translation.MODAL_DELETE_APPLICATION_ACTIONS_DELETE)}
        </Button>
        <Button
          variant="outlined"
          size="fl"
          onClick={onClose}
        >
          {t(Translation.MODAL_DELETE_APPLICATION_ACTIONS_CANCEL)}
        </Button>
      </div>
    </Modal>
  )
}
