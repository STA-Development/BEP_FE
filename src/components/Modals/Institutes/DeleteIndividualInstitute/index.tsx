import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { CloseIcon } from '@components/Icons'
import { Modal } from '@components/Modals'
import { Translation } from '@constants/translations'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { educationalInstitutesMiddleware } from '@redux/slices/educational-instutions'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

export interface IDeleteApplication {
  id: string
}

export const DeleteIndividualInstitute = ({ id }: IDeleteApplication) => {
  const [t] = useTranslation()

  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.DeleteIndividualInstitute))
  }, [])

  const onDelete = () => {
    dispatch(educationalInstitutesMiddleware.deleteEducationalInstitute(id))
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className="mb-5 flex items-start justify-between">
        <Dialog.Title className="text-base">
          <p>{t(Translation.MODAL_DELETE_EDUCATIONAL_TITLE)}</p>
          <p>{t(Translation.MODAL_DELETE_EDUCATIONAL_DESCRIPTION)}</p>
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
          {t(Translation.MODAL_DELETE_EDUCATIONAL_DELETE_BUTTON)}
        </Button>
        <Button
          variant="outlined"
          size="fl"
          onClick={onClose}
        >
          {t(Translation.MODAL_DELETE_EDUCATIONAL_CANCEL_BUTTON)}
        </Button>
      </div>
    </Modal>
  )
}
