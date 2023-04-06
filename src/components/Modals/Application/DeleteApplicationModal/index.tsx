import React, { useCallback } from 'react'
import { ModalName } from '@allTypes/modals'
import { CloseIcon } from '@components/Icons'
import { Modal } from '@components/Modals'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@UIComponents/Button'

export const DeleteApplicationModal = () => {
  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.DeleteApplicationModal))
  }, [])

  return (
    <Modal onClose={onClose}>
      <div className="mb-5 flex items-start justify-between">
        <Dialog.Title className="text-base">
          <p>Are you sure you want to delete this?</p>
          <p>You will not be able to restore it</p>
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
          onClick={onClose}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          size="fl"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}
