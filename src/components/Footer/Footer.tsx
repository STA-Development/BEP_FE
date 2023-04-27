import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { FBIcon, GGIcon, LNIcon, TWIcon, YTIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import Link from 'next/link'

const contacts = [
  'E-mail: info@bep.am',
  'Telephone: (+374) 11528112',
  '34 Abovyan Street, office 7',
  'RA, Yerevan, 0009,',
]
const policiesAndTerms = ['Privacy Policy', 'Terms of Use']
const dontMissOut = [
  { label: 'News', href: '/news' },
  {
    label: 'Events',
    href: '/events',
  },
]
const socials = [
  { href: 'http://fb.com', icon: <FBIcon /> },
  { href: 'http://tw.com', icon: <TWIcon /> },
  { href: 'http://ln.com', icon: <LNIcon /> },
  { href: 'http://yt.com', icon: <YTIcon /> },
  { href: 'http://gg.com', icon: <GGIcon /> },
]

// TODO Update links
export const Footer = () => {
  const [t] = useTranslation()

  const copyright = t(Translation.FOOTER_COPYRIGHT)

  return (
    <Container color="primary">
      <div className="flex flex-col justify-between py-10 text-white xl:flex-row xl:pb-5">
        <div className="order-2 mb-10 space-y-5 divide-gray-thin border-b border-gray-thin pb-10 xl:order-1 xl:m-0 xl:divide-y xl:border-none xl:p-0">
          <p className="text-base font-medium">Contacts:</p>
          <ul className="space-y-2.5 pt-0 text-sm text-gray-thin xl:pt-5">
            {contacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="order-4 space-y-5 divide-gray-thin xl:order-2 xl:divide-y">
          <p className="text-base font-medium">Policies and Terms of use:</p>
          <ul className="space-y-2.5 pt-0 text-sm text-gray-thin xl:pt-5">
            {policiesAndTerms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="order-3 mb-10 space-y-5 divide-gray-thin border-b border-gray-thin pb-10 xl:order-3 xl:m-0 xl:divide-y xl:border-none xl:p-0">
          <p className="text-base font-medium">Don’t miss out:</p>
          <ul className="space-y-2.5 pt-0 text-sm text-gray-thin xl:pt-5">
            {dontMissOut.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 mb-10 space-y-5 divide-gray-thin border-b border-gray-thin pb-10 xl:order-4 xl:m-0 xl:divide-y xl:border-none xl:p-0">
          <p className="text-base font-medium">Get in touch with us:</p>
          <div className="text-sm text-gray-thin">
            <ul className="flex space-x-5 pt-0 xl:pt-5">
              {socials.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-12 hidden text-sm text-gray-thin underline xl:block">{copyright}</p>
          </div>
        </div>
      </div>
      <p className="block pb-10 text-sm text-gray-thin underline xl:hidden">{copyright}</p>
    </Container>
  )
}
