import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '@headlessui/react'
import { Roboto } from 'next/font/google'

import { Button } from '@/components/Button'
import { CloseIcon, JobIcon } from '@/components/Icons'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const ApplicationDialog = ({
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
      <div className="fixed inset-0 flex items-start justify-center p-4">
        <Dialog.Panel className="rounded bg-white p-10">
          <div className="mb-5 flex items-center justify-between">
            <Dialog.Title className="text-lg">What are you looking for?</Dialog.Title>
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
              variant="contained"
              color="gray"
              size="app"
              className="flex-col"
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
