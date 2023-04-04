import React, { Fragment } from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { BarsIcon, CloseIcon, LogOutIcon, UserIcon } from '@components/Icons'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
  { name: 'News', href: '/news', current: false },
]

const links = [
  { href: '/settings', label: 'Change Email' },
  { href: '/settings', label: 'Apply' },
  { href: '/settings', label: 'Edit Profile' },
  { href: '/settings', label: 'Log Out' },
]

export interface HeaderProps {
  loggedIn: boolean
}

export const Header = ({ loggedIn }: HeaderProps) => (
  <Disclosure as="nav">
    {({ open }) => (
      <>
        <Container color="primary">
          <div className="relative flex h-23 items-center justify-between bg-primary">
            <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-400 xl:hidden">
                <span className="sr-only">Open main menu</span>
                {open ? <CloseIcon /> : <BarsIcon />}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-start xl:ml-0 xl:items-stretch">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-lg text-white"
                >
                  Logo
                </Link>
              </div>
              <div className="ml-[120px] hidden items-center space-x-20 xl:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base text-white hover:underline"
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute inset-y-0 right-0 hidden items-center xl:flex">
              {loggedIn ? (
                <Menu
                  as="div"
                  className="relative"
                >
                  <Menu.Button className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white focus:outline-none">
                    <span className="sr-only">Open user menu</span>

                    <UserIcon />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[355px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-5">
                        <div className="mb-5 flex items-center">
                          <div className="mr-5 h-[80px] w-[80px] rounded-full bg-gray-light" />
                          <div>
                            <p className="mb-2.5 text-lg text-black">Samvel Hakobyan</p>
                            <p className="text-base text-black-light">example@gmail.com</p>
                          </div>
                        </div>
                        <ul>
                          {links.map((link) => (
                            <Menu.Item key={link.href}>
                              <li className="mb-2.5">
                                <Link href={link.href}>
                                  <Button variant="outlined">{link.label}</Button>
                                </Link>
                              </li>
                            </Menu.Item>
                          ))}
                        </ul>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <>
                  <div className="ml-[60px]">
                    <Link href="/login">
                      <Button
                        variant="text"
                        color="secondary"
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                  <div className="ml-[60px]">
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
            LeftIcon={LogOutIcon}
          >
            Log Out
          </Button>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)
