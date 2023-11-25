import React, { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { UserIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { Menu, Transition } from '@headlessui/react'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

export interface IHeaderUserProps {
  handleLogOut: () => void
}

export const User = ({ handleLogOut }: IHeaderUserProps) => {
  const { name, email, role } = useAppSelector(usersSelector.user)

  const [t] = useTranslation()

  const links = [
    { href: '/profile/applications', label: t(Translation.NAVBAR_USER_MENU_ADD_APPLICATION) },
    { href: '/profile/settings', label: t(Translation.NAVBAR_USER_MENU_EDIT_PROFILE) },
  ]

  const showMenuItems = role !== Roles.Admin && role !== Roles.NOROLE

  return (
    <Menu
      as="div"
      className="relative"
    >
      {({ close }) => (
        <div>
          <Menu.Button className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white focus:outline-none">
            <span className="sr-only">{t(Translation.NAVBAR_USER_MENU)}</span>
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
                  <div>
                    <p className="mb-2.5 text-lg text-black">{name}</p>
                    <p className="text-base text-black-light">{email}</p>
                  </div>
                </div>
                <ul>
                  {showMenuItems
                    ? links.map((link) => (
                        <Menu.Item key={link.href}>
                          <li className="w-100 mb-2.5">
                            <Link href={link.href}>
                              <Button
                                className="w-full"
                                variant="outlined"
                                onClick={close}
                              >
                                {link.label}
                              </Button>
                            </Link>
                          </li>
                        </Menu.Item>
                      ))
                    : null}
                  <Menu.Item>
                    <li className="mb-2.5">
                      <Button
                        className="w-full"
                        onClick={handleLogOut}
                        variant="outlined"
                      >
                        {t(Translation.NAVBAR_LOGOUT)}
                      </Button>
                    </li>
                  </Menu.Item>
                </ul>
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}
