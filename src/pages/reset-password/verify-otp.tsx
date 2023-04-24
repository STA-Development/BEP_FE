import React from 'react'
import { ChekInIcon } from '@components/Icons/CheckInIcon'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

interface VerifyOtpProps {
  setSelectedIndex: (value: (prev: number) => number) => void
}

const VerifyOtp = ({ setSelectedIndex }: VerifyOtpProps) => (
  <div className="w-full max-w-[480px]">
    <h1 className="text-xl font-medium text-black xl:font-normal">
      The link was sent to your email
    </h1>
    <div className="mt-5 flex border-b border-gray-thin pb-5">
      <ChekInIcon className="mr-5" />
      <p className="text-base text-black-light">
        Check your inbox and click on the link for password recovery
      </p>
    </div>
    <div className="mb-5 mt-5">
      <p className="mb-5 text-base text-black-light">Didn’t get the password? Click “Resend”</p>
      <TextField fieldName="otp" />
    </div>
    <Button onClick={() => setSelectedIndex((prev) => (prev > 1 ? 1 : prev) + 1)}>Next</Button>
  </div>
)

export default VerifyOtp
