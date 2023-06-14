import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { CloseIcon } from '@components/Icons'
import { Modal } from '@components/Modals'
import { Translation } from '@constants/translations'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { eventsMiddleware } from '@redux/slices/events'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

export interface IDeleteIndividualEvent {
  id: string
}

export const DeleteIndividualEventModal = ({ id }: IDeleteIndividualEvent) => {
  const [t] = useTranslation()

  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.DeleteIndividualEventModal))
  }, [])

  const onDelete = () => {
    dispatch(eventsMiddleware.deleteIndividualEvent(id))

    dispatch(viewsMiddleware.closeModal(ModalName.DeleteIndividualEventModal))
  }

  return (
    <Modal onClose={onClose}>
      <div className="mb-5 flex items-start justify-between">
        <Dialog.Title className="text-base">
          <p>{t(Translation.MODAL_DELETE_EVENTS_TITLE)}</p>
          <p>{t(Translation.MODAL_DELETE_EVENTS_DESCRIPTION)}</p>
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
          size="fl"
          onClick={onDelete}
        >
          {t(Translation.MODAL_DELETE_EVENTS_ACTIONS_DELETE)}
        </Button>
        <Button
          variant="outlined"
          size="fl"
          onClick={onClose}
        >
          {t(Translation.MODAL_DELETE_EVENTS_ACTIONS_CANCEL)}
        </Button>
      </div>
    </Modal>
  )
}
