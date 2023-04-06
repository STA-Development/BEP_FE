import React, { useState } from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import { ChekInIcon } from '@components/Icons/CheckInIcon'
import { Input } from '@components/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'

export enum RouterQueryTypes {
  verifyOtp = 'verify-otp',
  confirmPassword = 'confirm-password',
}

export const ResetPassword = () => {
  const router = useRouter()
  const [emailValue, setEmailValue] = useState<string>('')
  const [emailVerificationError, setEmailVerificationError] = useState<string>()

  const handleEmailSend = () => {
    const emailVerification: boolean = /\S+@\S+\.\S+/.test(emailValue)

    if (!emailVerification || !emailValue.length) {
      setEmailVerificationError('Email not valid')

      return
    }

    router.query.tab = 'verify-otp'
    router.push(router)
    setEmailVerificationError('')
  }

  const handleEnterCode = (value: string) => {
    if (value.length === 6) {
      router.query.tab = 'confirm-password'
      router.push(router)
    }
  }

  return (
    <Container className="pb-40 pt-10">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button
            variant="text"
            leftIcon={<LeftIcon />}
          >
            Go back
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outlined">Log In</Button>
        </Link>
      </div>
      <div className="flex w-full justify-center">
        {!router.query.tab && (
          <div className="w-full max-w-[480px]">
            <h1 className="mb-5 text-xl">Forgot your password</h1>
            <p className="mb-5 text-base text-black-light">
              Enter the email that you’ve registered with in the field below. You will receive a
              link for password recovery
            </p>
            <div className="mb-5 w-full">
              <Input
                type="email"
                error={emailVerificationError}
                placeholder="Email"
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <Button
              size="fl"
              onClick={() => handleEmailSend()}
            >
              Next
            </Button>
          </div>
        )}
        {router.query.tab === RouterQueryTypes.verifyOtp && (
          <div className="w-full max-w-[480px]">
            <h1 className="text-xl font-medium text-black xl:font-normal">
              The link was sent to your email
            </h1>
            <div className="mt-5 flex border-b border-gray-thin pb-5">
              <ChekInIcon />
              <p className="text-base text-black-light">
                Check your inbox and click on the link for password recovery
              </p>
            </div>
            <div className="mb-5 mt-5">
              <p className="mb-5 text-base text-black-light">
                Didn’t get the password? Click “Resend”
              </p>
              <Input
                type="email"
                placeholder="Enter Code"
                onChange={(e) => handleEnterCode(e.target.value)}
              />
            </div>
            <Button size="fl">Resend Email</Button>
          </div>
        )}
        {router.query.tab === RouterQueryTypes.confirmPassword && (
          <div className="w-full max-w-[480px]">
            <h1 className="mb-5 text-xl">Create a new password</h1>
            <div className="grid w-full gap-5">
              <Input
                placeholder="Enter a new password"
                type="password"
                id="password"
              />
              <Input
                placeholder="Confirm password"
                type="password"
                id="confirm_password"
              />
              <Button size="fl">Submit Password</Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default ResetPassword
