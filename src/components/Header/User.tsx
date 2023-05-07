import React, { Fragment } from 'react'
import { UserIcon } from '@components/Icons'
import { Menu, Transition } from '@headlessui/react'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

const links = [
  { href: '/settings', label: 'Add Application' },
  { href: '/settings', label: 'Edit Profile' },
]

export interface IHeaderUserProps {
  handleLogOut: () => void
}

export const User = ({ handleLogOut }: IHeaderUserProps) => {
  const { name, email } = useAppSelector(usersSelector.user)

  return (
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
                <p className="mb-2.5 text-lg text-black">{name}</p>
                <p className="text-base text-black-light">{email}</p>
              </div>
            </div>
            <ul>
              {links.map((link) => (
                <Menu.Item key={link.href}>
                  <li className="w-100 mb-2.5">
                    <Link href={link.href}>
                      <Button
                        className="w-full"
                        variant="outlined"
                      >
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                </Menu.Item>
              ))}
              <Menu.Item>
                <li className="mb-2.5">
                  <Button
                    className="w-full"
                    onClick={handleLogOut}
                    variant="outlined"
                  >
                    Log Out
                  </Button>
                </li>
              </Menu.Item>
            </ul>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
