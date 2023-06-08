import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

const RequestPassword = ({ children }: { children: JSX.Element }) => {
  const isResetPasswordLoading = useAppSelector(usersSelector.isResetPasswordLoading)
  const [t] = useTranslation()

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">{t(Translation.PAGE_RESET_PASSWORD_TITLE)}</h1>
      <p className="mb-5 text-base text-black-light">
        {t(Translation.PAGE_RESET_PASSWORD_DESCRIPTION)}
      </p>
      <div className="mb-5 w-full">{children}</div>
      <Button
        size="fl"
        type="submit"
        disabled={isResetPasswordLoading}
        isLoading={isResetPasswordLoading}
      >
        {t(Translation.PAGE_RESET_PASSWORD_BUTTON)}
      </Button>
    </div>
  )
}

export default RequestPassword
