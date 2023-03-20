import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'

import { Button } from '@/components/Button'

import jobSvg from '~/icons/job.svg'
import practiceSvg from '~/icons/practice.svg'
import xBlackSvg from '~/icons/xBlack.svg'

const ApplicationDialog = ({
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
      className="relative z-50"
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
              variant="outlined"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={xBlackSvg}
                alt="close"
              />
            </Button>
          </div>

          <div className="flex gap-10">
            <Button
              variant="contained"
              size="app"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={jobSvg}
                alt="job"
                className="mb-5 w-auto"
              />
              Job
            </Button>
            <Button
              variant="contained"
              size="app"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={practiceSvg}
                alt="job"
                className="mb-5 w-auto"
              />
              Practice
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ApplicationDialog
