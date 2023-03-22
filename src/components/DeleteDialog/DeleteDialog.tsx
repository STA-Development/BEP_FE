import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '@headlessui/react'
import { Roboto } from 'next/font/google'

import { Button } from '@/components/Button'
import { CloseIcon } from '@/components/Icons'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const DeleteDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={`${roboto.variable} relative z-50 font-sans`}
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
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon fill="fill-black" />
            </Button>
          </div>

          <div className="flex gap-10">
            <Button
              size="fl"
              onClick={() => setIsOpen(false)}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              size="fl"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
