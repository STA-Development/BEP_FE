import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import MainLayout from '@/layouts/MainLayout'
import { Button } from '@/components/Button'
import {
  ApplicationsIcon,
  LogOutIcon,
  MonitoringSystemsIcon,
  SettingsIcon,
} from '@/components/Icons'

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
    href: '/settings',
    icon: <SettingsIcon />,
  },
  applications: {
    label: 'Applications',
    href: '/applications',
    icon: <ApplicationsIcon />,
  },
  'monitoring-systems': {
    label: 'Monitoring Systems',
    href: '/monitoring-systems',
    icon: <MonitoringSystemsIcon />,
  },
}

export const ProfileLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const pathname = router.pathname.substring(1)
  const label = menu[pathname]?.label

  return (
    <MainLayout>
      <div className="container">
        <div className="mt-10 mb-[120px] grid grid-cols-5 gap-10 divide-x divide-gray-light">
          <aside>
            <h1 className="mb-5 text-xl">{label}</h1>
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
              leftIcon={<LogOutIcon />}
            >
              Log Out
            </Button>
          </aside>
          <main className="col-span-4 pl-10">{children}</main>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfileLayout
