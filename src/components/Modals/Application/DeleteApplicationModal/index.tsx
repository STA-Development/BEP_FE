import React, { useCallback } from 'react'
import { ModalName } from '@allTypes/modals'
import { Button } from '@components/Button'
import { CloseIcon } from '@components/Icons'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'

export const DeleteApplicationModal = () => {
  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.DeleteApplicationModal))
  }, [])

  return (
    <Dialog
      open
      onClose={onClose}
      className="relative z-50 font-sans"
    >
      <div
        className="fixed inset-0 bg-black/20"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="min-w-[552px] rounded bg-white p-10">
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
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
