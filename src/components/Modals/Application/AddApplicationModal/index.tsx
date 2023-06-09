import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { CloseIcon, JobIcon } from '@components/Icons'
import { Modal } from '@components/Modals'
import { Translation } from '@constants/translations'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import { useRouter } from 'next/router'

export const AddApplicationModal = () => {
  const [t] = useTranslation()

  const router = useRouter()

  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.AddApplicationModal))
  }, [])

  const routeFileTheForm = (path: string) => {
    router.push({
      pathname: '/fill-the-form',
      query: { path },
    })
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className="mb-5 flex items-center justify-between">
        <Dialog.Title className="text-lg">
          {t(Translation.MODAL_ADD_APPLICATION_TITLE)}
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
          variant="contained"
          color="gray"
          size="app"
          className="flex-col"
          onClick={() => routeFileTheForm('Job')}
        >
          <div className="mb-5 w-auto">
            <JobIcon />
          </div>
          {t(Translation.MODAL_ADD_APPLICATION_ACTIONS_JOB)}
        </Button>
        <Button
          variant="contained"
          color="gray"
          size="app"
          className="flex-col"
          onClick={() => routeFileTheForm('Practice')}
        >
          <div className="mb-5 w-auto">
            <JobIcon />
          </div>
          {t(Translation.MODAL_ADD_APPLICATION_ACTIONS_PRACTICE)}
        </Button>
      </div>
    </Modal>
  )
}
