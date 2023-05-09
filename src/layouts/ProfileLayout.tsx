import React, { PropsWithChildren, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import {
  ApplicationsIcon,
  LogOutIcon,
  MonitoringSystemsIcon,
  SettingsIcon,
} from '@components/Icons'
import { HelpIcon } from '@components/Icons/HelpIcon'
import { Translation } from '@constants/translations'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface MenuItem {
  label: string
  href: string
  icon: ReactNode
}

interface Menu {
  [key: string]: MenuItem
}

export const ProfileLayout = ({ children }: PropsWithChildren) => {
  const [t] = useTranslation()
  const router = useRouter()
  const { pathname } = router

  const menu: Menu = {
    settings: {
      label: t(Translation.PAGE_PROFILE_MENU_SETTINGS),
      href: '/profile/settings',
      icon: <SettingsIcon />,
    },
    applications: {
      label: t(Translation.PAGE_PROFILE_MENU_APPLICATIONS),
      href: '/profile/applications',
      icon: <ApplicationsIcon />,
    },
    'monitoring-systems': {
      label: t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS),
      href: '/profile/monitoring-systems',
      icon: <MonitoringSystemsIcon />,
    },
    help: {
      label: t(Translation.PAGE_PROFILE_MENU_HELP),
      href: '/profile/help',
      icon: <HelpIcon />,
    },
  }

  const menuItem = Object.keys(menu).find((item) => menu[String(item)].href === pathname)
  const label = menuItem ? menu?.[String(menuItem)]?.label : ''

  const handleLogOut = () => {
    dispatch(usersMiddleware.logOut())
  }

  return (
    <Container>
      <div className="mb-30 mt-5 grid grid-cols-1 divide-gray-thin xl:mt-10 xl:grid-cols-5 xl:gap-10 xl:divide-x">
        <aside>
          <h1 className="mb-5 text-xl font-medium xl:font-normal">{label}</h1>
          <div className="hidden xl:block">
            <ul className="mb-10">
              {Object.values(menu).map((item) => (
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
              ))}
            </ul>
            <Button
              onClick={handleLogOut}
              size="bs"
              LeftIcon={LogOutIcon}
            >
              {t(Translation.PAGE_PROFILE_ACTIONS_LOGOUT)}
            </Button>
          </div>
        </aside>
        <main className="col-span-4 xl:pl-10">{children}</main>
      </div>
    </Container>
  )
}

export default ProfileLayout
