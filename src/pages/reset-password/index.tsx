import React from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import Link from 'next/link'

export const ResetPassword = () => {
  const error = false

  return (
    <Container className="pt-10">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button
            variant="text"
            LeftIcon={LeftIcon}
          >
            Go back
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outlined">Log In</Button>
        </Link>
      </div>
      <div className="mx-auto w-[380px] xl:w-[480px]">
        <h1 className="mb-5 text-xl">Forgot your password</h1>
        <p className="mb-5 text-base text-black-light">
          Enter the email that you’ve registered with in the field below. You will receive a link
          for password recovery
        </p>
        <div className="mb-5 w-full">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`${
              error ? 'border-red placeholder:text-red' : 'border-gray-light placeholder:text-black'
            } w-full rounded border py-2.5 px-5 outline-0 placeholder:text-base`}
          />
          {error ? <p className="mt-2.5 text-red">Email not valid</p> : null}
        </div>
        <Button size="fl">Next</Button>
      </div>
    </Container>
  )
}

export default ResetPassword
