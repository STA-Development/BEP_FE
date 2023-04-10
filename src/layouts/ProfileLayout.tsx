import React, { PropsWithChildren, ReactNode } from 'react'
import { Container } from '@components/Container'
import {
  ApplicationsIcon,
  LogOutIcon,
  MonitoringSystemsIcon,
  SettingsIcon,
} from '@components/Icons'
import { HelpIcon } from '@components/Icons/HelpIcon'
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

const menu: Menu = {
  settings: {
    label: 'Settings',
    href: '/profile/settings',
    icon: <SettingsIcon />,
  },
  applications: {
    label: 'Applications',
    href: '/profile/applications',
    icon: <ApplicationsIcon />,
  },
  'monitoring-systems': {
    label: 'Monitoring Systems',
    href: '/monitoring-systems',
    icon: <MonitoringSystemsIcon />,
  },
  help: {
    label: 'Help',
    href: '/profile/help',
    icon: <HelpIcon />,
  },
}

export const ProfileLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const { pathname } = router
  const menuItem = Object.keys(menu).find((item) => menu[item].href === pathname)
  const label = menuItem ? menu?.[menuItem]?.label : ''

  return (
    <Container>
      <div className="mb-30 mt-5 grid grid-cols-1 divide-gray-light xl:mt-10 xl:grid-cols-5 xl:gap-10 xl:divide-x">
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
              size="bs"
              LeftIcon={LogOutIcon}
            >
              Log Out
            </Button>
          </div>
        </aside>
        <main className="col-span-4 xl:pl-10">{children}</main>
      </div>
    </Container>
  )
}

export default ProfileLayout
