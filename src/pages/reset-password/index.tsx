import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { ChekInIcon } from '@components/Icons/CheckInIcon'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'
import { useRouter } from 'next/router'

import { testEmail } from '@utils/testEmail'

export enum RouterQueryTypes {
  verifyOtp = 'verify-otp',
  confirmPassword = 'confirm-password',
}

export const ResetPassword = () => {
  const [t] = useTranslation()

  const router = useRouter()
  const [emailValue, setEmailValue] = useState<string>('')
  const [emailVerificationError, setEmailVerificationError] = useState<string>()

  const handleEmailSend = () => {
    const emailVerification: boolean = testEmail(emailValue)

    if (!emailVerification || !emailValue.length) {
      setEmailVerificationError('Email not recognized')

      return
    }

    router.query.tab = RouterQueryTypes.verifyOtp
    router.push(router)
    setEmailVerificationError('')
  }

  const onEnterCode = (value: string) => {
    if (value.length === 6) {
      router.query.tab = RouterQueryTypes.confirmPassword
      router.push(router)
    }
  }

  const onSetEmail = (value: string) => {
    setEmailValue(value)
  }

  return (
    <Container className="pb-40 pt-10">
      <div className="flex w-full justify-center">
        {!router.query.tab && (
          <div className="w-full max-w-[480px]">
            <h1 className="mb-5 text-xl">{t(Translation.PAGE_RESET_PASSWORD_TITLE)}</h1>
            <p className="mb-5 text-base text-black-light">
              {t(Translation.PAGE_RESET_PASSWORD_DESCRIPTION)}
            </p>
            <div className="mb-5 w-full">
              <Input
                type="email"
                error={emailVerificationError}
                placeholder={`${t(Translation.PAGE_RESET_PASSWORD_INPUT_PLACEHOLDER)}`}
                onChange={(e) => onSetEmail(e.target.value)}
              />
            </div>
            <Button
              size="fl"
              onClick={handleEmailSend}
            >
              {t(Translation.PAGE_RESET_PASSWORD_ACTIONS_REQUEST_PASSWORD_RESET)}
            </Button>
          </div>
        )}
        {router.query.tab === RouterQueryTypes.verifyOtp && (
          <div className="w-full max-w-[480px]">
            <h1 className="text-xl font-medium text-black xl:font-normal">
              {t(Translation.PAGE_RESET_PASSWORD_VERIFICATION_TITLE)}
            </h1>
            <div className="mt-5 flex border-b border-gray-thin pb-5">
              <ChekInIcon className="mr-5" />
              <p className="text-base text-black-light">
                {t(Translation.PAGE_RESET_PASSWORD_VERIFICATION_DESCRIPTION)}
              </p>
            </div>
            <div className="mb-5 mt-5">
              <p className="mb-5 text-base text-black-light">
                {t(Translation.PAGE_RESET_PASSWORD_VERIFICATION_CODE_RESEND)}
              </p>
              <Input
                type="email"
                placeholder={`${t(
                  Translation.PAGE_RESET_PASSWORD_VERIFICATION_CODE_INPUT_PLACEHOLDER
                )}`}
                onChange={(e) => onEnterCode(e.target.value)}
              />
            </div>
            <Button size="fl">
              {t(Translation.PAGE_RESET_PASSWORD_VERIFICATION_ACTIONS_RESEND_EMAIL)}
            </Button>
          </div>
        )}
        {router.query.tab === RouterQueryTypes.confirmPassword && (
          <div className="w-full max-w-[480px]">
            <h1 className="mb-5 text-xl">
              {t(Translation.PAGE_RESET_PASSWORD_CONFIRMATION_TITLE)}
            </h1>
            <div className="grid w-full gap-5">
              <Input
                placeholder={`${t(Translation.PAGE_RESET_PASSWORD_CONFIRMATION_PASSWORD)}`}
                type="password"
                id="password"
              />
              <Input
                placeholder={`${t(Translation.PAGE_RESET_PASSWORD_CONFIRMATION_PASSWORD_CONFIRM)}`}
                type="password"
                id="confirm_password"
              />
              <Button size="fl">
                {t(Translation.PAGE_RESET_PASSWORD_CONFIRMATION_ACTIONS_SUBMIT)}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default ResetPassword
