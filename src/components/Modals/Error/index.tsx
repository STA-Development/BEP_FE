import React, { useCallback, useEffect } from 'react'
import { ModalName } from '@allTypes/modals'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

export interface IErrorModalProps {
  error: string
}

export const Error = ({ error }: IErrorModalProps) => {
  const onClose = useCallback(() => {
    dispatch(viewsMiddleware.closeModal(ModalName.getErrorMessage))
    dispatch(viewsMiddleware.resetErrorMessage())
  }, [])

  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 3000)
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <div className="fixed inset-0 top-3 z-50 flex h-[60px] justify-center px-2">
      <div className="h-[60px] h-full rounded border-2 border-red-light bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="mr-4 text-base font-bold text-red-thin">{error}</p>
          <Button
            variant="text"
            size="xs"
            className="text-red-thin hover:text-red-600"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
