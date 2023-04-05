import React, { useEffect, useState } from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { EyeIcon, LeftIcon } from '@components/Icons'
import { OrDivider } from '@components/OrDivider'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/users'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Login = () => {
  const { push } = useRouter()
  const { isLoading, error, successfully } = useAppSelector(usersSelector.user)

  const [show, setShow] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLoginFunc = () => {
    dispatch(usersMiddleware.login({ email, password }))
  }

  useEffect(() => {
    if (successfully) {
      push('/profile')
    }
  }, [push, successfully])

  return (
    <Container className="pt-10">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button
            variant="text"
            leftIcon={<LeftIcon />}
          >
            Go back
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="outlined">Register</Button>
        </Link>
      </div>
      <div className="mx-auto flex w-[380px] flex-col items-center">
        <h1 className="mb-5 text-xl">Log In</h1>
        <Button
          variant="outlined"
          size="fl"
        >
          Continue with Google
        </Button>
        <OrDivider />
        <div className="mb-5 w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="example@email.com"
            className={`${
              error && !email
                ? 'border-red placeholder:text-red'
                : 'border-gray-light placeholder:text-black'
            } w-full rounded border py-2.5 px-5 outline-0 placeholder:text-base`}
          />
          {error && !email ? <p className="mt-2.5 text-red">Email not valid</p> : null}
        </div>
        <div className="mb-5 w-full">
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className={`${
                error && !password
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border py-2.5 px-5 outline-0 placeholder:text-base`}
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
          {error && !password ? <p className="mt-2.5 text-red">Password not valid</p> : null}
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
        <Button
          className="mb-7"
          size="fl"
          disabled={isLoading}
          onClick={() => handleLoginFunc()}
        >
          Log In
        </Button>
        <div className="w-full">
          {error ? <p className="mt-2.5 text-red">Something went wrong</p> : null}
        </div>
        <div className="mb-44 w-full">
          <Button variant="text">Forgot Password?</Button>
        </div>
      </div>
    </Container>
  )
}

export default Login
