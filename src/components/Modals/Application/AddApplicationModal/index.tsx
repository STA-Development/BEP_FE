import React, { useCallback } from 'react'
import { ModalName } from '@allTypes/modals'
import { CloseIcon, JobIcon } from '@components/Icons'
import { Modal } from '@components/Modals'
import { Button } from '@components/UI/Button'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'

export const AddApplicationModal = () => {
  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.AddApplicationModal))
  }, [])

  return (
    <Modal onClose={onClose}>
      <div className="mb-5 flex items-center justify-between">
        <Dialog.Title className="text-lg">What are you looking for?</Dialog.Title>
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
          onClick={onClose}
        >
          <div className="mb-5 w-auto">
            <JobIcon />
          </div>
          Job
        </Button>
        <Button
          variant="contained"
          color="gray"
          size="app"
          className="flex-col"
          onClick={onClose}
        >
          <div className="mb-5 w-auto">
            <JobIcon />
          </div>
          Practice
        </Button>
      </div>
    </Modal>
  )
}
