import React, { PropsWithChildren, ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Container } from '@components/Container'
import {
  ApplicationsIcon,
  LogOutIcon,
  MonitoringSystemsIcon,
  SettingsIcon,
} from '@components/Icons'
import { FilterIcon } from '@components/Icons/FilterIcon'
import { HelpIcon } from '@components/Icons/HelpIcon'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { isAuthenticated } from '@utils/authUtils'

interface MenuItem {
  label: string
  href: string
  icon: ReactNode
  show: boolean
}

interface Menu {
  [key: string]: MenuItem
}

export const ProfileLayout = ({ children }: PropsWithChildren) => {
  const [t] = useTranslation()
  const router = useRouter()
  const { pathname } = router
  const { role } = useAppSelector(usersSelector.user)

  const menu: Menu = {
    settings: {
      label: t(Translation.PAGE_PROFILE_MENU_SETTINGS),
      href: '/profile/settings',
      icon: <SettingsIcon />,
      show: role !== Roles.Admin,
    },
    applications: {
      label: t(Translation.PAGE_PROFILE_MENU_APPLICATIONS),
      href: '/profile/applications',
      icon: <ApplicationsIcon />,
      show: role !== Roles.Admin,
    },
    'monitoring-systems': {
      label: t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS),
      href: '/monitoring-systems',
      icon: <MonitoringSystemsIcon />,
      show: true,
    },
    help: {
      label: t(Translation.PAGE_PROFILE_MENU_HELP),
      href: '/profile/help',
      icon: <HelpIcon />,
      show: true,
    },
  }

  const menuItem = Object.keys(menu).find((item) => menu[String(item)].href === pathname)
  const label = menuItem ? menu?.[String(menuItem)]?.label : ''

  const [active, setActive] = useState(true)

  const openFilter = () => {
    setActive(!active)
  }

  const handleLogOut = () => {
    dispatch(usersMiddleware.logOut())
  }

  return (
    <Container>
      <div className="mb-30 mt-5 flex flex-wrap justify-center divide-gray-thin xl:mt-10 xl:grid xl:grid-cols-5 xl:gap-10 xl:divide-x">
        <aside className="mr-10">
          <h1 className="text-xl font-medium xl:mb-5 xl:font-normal">{label}</h1>
          <div className="mb-5 xl:hidden">
            <Button
              variant="text"
              onClick={openFilter}
              LeftIcon={FilterIcon}
              className="pl-0"
            >
              <p>{`${
                !active
                  ? t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_OPEN)
                  : t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_CLOSE)
              }`}</p>
            </Button>
          </div>
          <div className={`xl:block ${active ? `flex` : `hidden`}`}>
            <ul className="mb-10">
              {Object.values(menu).map(
                (item) =>
                  item.show && (
                    <li
                      key={item.label}
                      className="mb-5 text-base font-medium text-primary"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center"
                      >
                        <span className="mr-2.5">{item.icon}</span>
                        {item.label}
                      </Link>
                    </li>
                  )
              )}
            </ul>
            {isAuthenticated() ? (
              <div className="hidden xl:block">
                <Button
                  onClick={handleLogOut}
                  size="fl"
                  LeftIcon={LogOutIcon}
                >
                  {t(Translation.PAGE_PROFILE_ACTIONS_LOGOUT)}
                </Button>
              </div>
            ) : null}
          </div>
        </aside>
        <main className="col-span-4 xl:pl-10">{children}</main>
      </div>
    </Container>
  )
}

export default ProfileLayout
