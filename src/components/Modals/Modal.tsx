import React, { PropsWithChildren } from 'react'
import { Dialog } from '@headlessui/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

interface IDialogProps extends PropsWithChildren {
  onClose: () => void
}

export const Modal = ({ children, onClose }: IDialogProps) => (
  <Dialog
    open
    onClose={onClose}
    className={`${roboto.variable} relative z-50 font-sans`}
  >
    <div
      className="fixed inset-0 bg-black/20"
      aria-hidden="true"
    />
    <div className="fixed inset-0 mt-40 flex items-start justify-center p-4">
      <Dialog.Panel className="min-w-[552px] rounded bg-white p-10">{children}</Dialog.Panel>
    </div>
  </Dialog>
)
