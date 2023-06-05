import React, { useCallback, useEffect } from 'react'
import { ErrorCloseModal } from '@components/Icons/ErrorCloseModal'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

export interface IErrorModalProps {
  error: string
}

export const Error = ({ error }: IErrorModalProps) => {
  const onClose = useCallback(() => {
    dispatch(
      viewsMiddleware.setToastNotificationPopUpState({
        open: false,
        props: {},
      })
    )
  }, [])

  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 3000)
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <div className="fixed inset-0 top-3 z-50 flex h-[60px] justify-center px-2">
      <div className="h-[60px] h-full rounded border-2 border-error-light bg-white p-4">
        <div className="flex items-center justify-between">
          <p className="mr-4 text-base font-bold text-error-thin">{error}</p>
          <Button
            variant="text"
            size="xs"
            className="text-error-thin hover:text-red-600"
            onClick={onClose}
          >
            <ErrorCloseModal />
          </Button>
        </div>
      </div>
    </div>
  )
}
