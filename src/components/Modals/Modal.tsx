import React, { PropsWithChildren } from 'react'
import { Dialog } from '@headlessui/react'

interface IDialogProps extends PropsWithChildren {
  onClose: () => void
}

export const Modal = ({ children, onClose }: IDialogProps) => (
  <Dialog
    open
    onClose={onClose}
    className="relative z-50"
  >
    <div
      className="fixed inset-0 bg-black/20"
      aria-hidden="true"
    />
    <div className="fixed inset-0 mt-40 flex items-start justify-center p-4">
      <Dialog.Panel className="w-full max-w-[552px] rounded bg-white p-10">{children}</Dialog.Panel>
    </div>
  </Dialog>
)
