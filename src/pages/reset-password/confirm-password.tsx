import React from 'react'
import { useTranslation } from 'react-i18next'
import IsLoading from '@components/IsLoading'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

const ConfirmPassword = ({ children }: { children: JSX.Element[] }) => {
  const { error, isResetPasswordLoading } = useAppSelector(usersSelector.user)
  const [t] = useTranslation()

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">{t(Translation.PAGE_CONFIRM_PASSWORD_TITLE)}</h1>
      <div className=" w-full">
        {children}
        <Button
          size="fl"
          type="submit"
          disabled={isResetPasswordLoading}
        >
          {isResetPasswordLoading ? <IsLoading /> : t(Translation.PAGE_CONFIRM_PASSWORD_BUTTON)}
        </Button>
        {error ? (
          <div className="mt-2.5 w-full">
            <p className="text-red">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ConfirmPassword