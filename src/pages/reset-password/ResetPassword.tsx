import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'

import leftSvg from '~/icons/left.svg'

export const ResetPassword = () => {
  const error = false

  return (
    <div className="container pt-10">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button variant="text">
            <Image
              src={leftSvg}
              alt="Picture of the author"
              className="mr-5"
            />
            Go back
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outlined">Log In</Button>
        </Link>
      </div>
      <div className="mx-auto w-[380px] lg:w-[480px]">
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
    </div>
  )
}

export default ResetPassword
ResetPassword.Layout = 'Auth'
