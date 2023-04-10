import React, { useState } from 'react'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { EyeIcon, LeftIcon } from '@components/Icons'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

export const Register = () => {
  const [show, setShow] = useState(false)
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
      <div className="mx-auto flex w-[380px] flex-col items-center">
        <h1 className="mb-5 text-xl">Create an account</h1>
        <Button
          variant="outlined"
          size="fl"
        >
          Continue with Google
        </Button>
        <OnDivider />
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="mb-5 w-full rounded border border-gray-light px-5 py-2.5 outline-0 placeholder:text-base placeholder:text-black"
        />
        <div className="mb-5 w-full">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`${
              error ? 'border-red placeholder:text-red' : 'border-gray-light placeholder:text-black'
            } w-full rounded border px-5 py-2.5 outline-0 placeholder:text-base`}
          />
          {error ? <p className="mt-2.5 text-red">Email not valid</p> : null}
        </div>
        <div className="mb-5 w-full">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className={`${
                error
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border px-5 py-2.5 outline-0 placeholder:text-base`}
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          {error ? <p className="mt-2.5 text-red">Password not valid</p> : null}
        </div>
        <div className="mb-5 w-full">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              id="confirm-password"
              placeholder="Confirm Password"
              className={`${
                error
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border px-5 py-2.5 outline-0 placeholder:text-base`}
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          {error ? <p className="mt-2.5 text-red">Passwords do not match</p> : null}
        </div>
        <div className="mb-5 flex w-full items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="ml-1 h-5 w-5 rounded-sm border-black"
          />
          <label
            htmlFor="remember-me"
            className="ml-6 text-sm"
          >
            Remember me
          </label>
        </div>
        <Button size="fl">Next</Button>
      </div>
    </Container>
  )
}

export default Register
