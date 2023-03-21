'use client'

import { PropsWithChildren } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import MainLayout from '@/layouts/MainLayout'
import { Button } from '@/components/Button'

import applicationsSvg from '~/icons/applications.svg'
import logOutSvg from '~/icons/log-out.svg'
import monitoringSystemsSvg from '~/icons/monitoring-systems.svg'
import settingsSvg from '~/icons/settings.svg'

interface MenuItem {
  label: string
  href: string
  icon: string
}
interface Menu {
  [key: string]: MenuItem
}

const menu: Menu = {
  settings: {
    label: 'Settings',
    href: '/settings',
    icon: settingsSvg,
  },
  applications: {
    label: 'Applications',
    href: '/applications',
    icon: applicationsSvg,
  },
  'monitoring-systems': {
    label: 'Monitoring Systems',
    href: '/monitoring-systems',
    icon: monitoringSystemsSvg,
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
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="mr-2.5"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button size="bs">
              <Image
                src={logOutSvg}
                alt="log out"
                className="mr-2.5"
              />
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
