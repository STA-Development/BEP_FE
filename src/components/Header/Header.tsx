import React, { useEffect } from 'react'
import { Container } from '@components/Container'
import { User } from '@components/Header/User'
import { BarsIcon, CloseIcon, LogOutIcon } from '@components/Icons'
import { Disclosure } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
  { name: 'Educational Institutes', href: '/educational-institutes', current: false },
]

export const Header = () => {
  const { isAuthenticated, isLogOutLoading } = useAppSelector(usersSelector.user)

  useEffect(() => {
    dispatch(usersMiddleware.isAuthenticated())
  }, [])

  const handleLogOut = () => {
    dispatch(usersMiddleware.logOut())
  }

  return (
    <div className="sticky top-0 z-40">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Container>
              <div className="relative flex h-23 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-400 xl:hidden">
                    <span className="sr-only">Open main menu</span>
                    {open ? <CloseIcon /> : <BarsIcon />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start pt-5 xl:ml-0 xl:items-stretch">
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-lg text-primary"
                    >
                      Logo
                    </Link>
                  </div>
                  <div className="ml-18 hidden w-full items-center space-x-15 rounded border-2 border-gray-thin bg-secondary px-10 xl:flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="py-5 text-base font-medium text-primary hover:underline"
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="flex flex-1 justify-end">
                      {isAuthenticated ? (
                        <User handleLogOut={handleLogOut} />
                      ) : (
                        <>
                          <div>
                            <Link href="/login">
                              <Button
                                variant="text"
                                color="primary"
                              >
                                Login
                              </Button>
                            </Link>
                          </div>
                          <div className="ml-15">
                            <Link href="/register">
                              <Button
                                color="primary"
                                variant="outlined"
                              >
                                Register
                              </Button>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Disclosure.Panel className="h-[calc(100vh-92px)] px-5 py-10 xl:hidden">
              <div className="mb-[120px] space-y-5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-base font-medium text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Button
                size="lg"
                disabled={isLogOutLoading}
                onClick={handleLogOut}
                LeftIcon={LogOutIcon}
              >
                Log Out
              </Button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
