import React from 'react'
import { useTranslation } from 'react-i18next'
import { ChekInIcon } from '@components/Icons/CheckInIcon'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

const VerifyOtp = ({ children }: { children: JSX.Element }) => {
  const [t] = useTranslation()

  const { error, isResetPasswordLoading } = useAppSelector(usersSelector.user)

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="text-xl font-medium text-black xl:font-normal">
        {t(Translation.PAGE_VERIFY_OTP_TITLE)}
      </h1>
      <div className="mt-5 flex border-b border-gray-thin pb-5">
        <ChekInIcon className="mr-5" />
        <p className="text-base text-black-light">{t(Translation.PAGE_VERIFY_OTP_DESCRIPTION)}</p>
      </div>
      <div className="mb-5 mt-5">
        <p className="mb-5 text-base text-black-light">{t(Translation.PAGE_VERIFY_OTP_LABEL)}</p>
        {children}
      </div>
      <Button
        type="submit"
        disabled={isResetPasswordLoading}
      >
        {t(Translation.PAGE_VERIFY_OTP_BUTTON)}
      </Button>
      {error ? (
        <div className="mt-2.5 w-full">
          <p className="text-red">{error}</p>
        </div>
      ) : null}
    </div>
  )
}

export default VerifyOtp
