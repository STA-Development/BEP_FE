import React, { useCallback } from 'react'
import { ModalName } from '@allTypes/modals'
import { Button } from '@components/Button'
import { CloseIcon, JobIcon } from '@components/Icons'
import { Dialog } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'

// TODO: Create a global component for modals
export const AddApplicationModal = () => {
  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.AddApplicationModal))
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
      <div className="fixed inset-0 flex items-start justify-center p-4">
        <Dialog.Panel className="rounded bg-white p-10">
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
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
