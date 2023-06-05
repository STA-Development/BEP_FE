import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

const ConfirmPassword = ({ children }: { children: JSX.Element[] }) => {
  const [t] = useTranslation()

  const isResetPasswordLoading = useAppSelector(usersSelector.isResetPasswordLoading)

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">{t(Translation.PAGE_CONFIRM_PASSWORD_TITLE)}</h1>
      <div className=" w-full">
        {children}
        <Button
          size="fl"
          type="submit"
          isLoading={isResetPasswordLoading}
          disabled={isResetPasswordLoading}
        >
          {t(Translation.PAGE_CONFIRM_PASSWORD_BUTTON)}
        </Button>
      </div>
    </div>
  )
}

export default ConfirmPassword
