import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { FBIcon, GGIcon, LNIcon, TWIcon, YTIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import Link from 'next/link'

// TODO Update links

export const Footer = () => {
  const [t] = useTranslation()

  const contacts = [
    `${t(Translation.FOOTER_CONTACTS_EMAIL)}: info@bep.am`,
    `${t(Translation.FOOTER_CONTACTS_TELEPHONE)}: (+374) 11528112`,
    `34 Abovyan ${t(Translation.FOOTER_CONTACTS_ADDRESS_STREET)}, ${t(
      Translation.FOOTER_CONTACTS_ADDRESS_OFFICE
    )} 7`,
    `${t(Translation.FOOTER_CONTACTS_ADDRESS_RA)}, Yerevan, 0009,`,
  ]
  const policiesAndTerms = [t(Translation.FOOTER_PRIVACY_POLICY), t(Translation.FOOTER_TERMS)]
  const dontMissOut = [
    { label: t(Translation.FOOTER_NEWS), href: '/news' },
    {
      label: t(Translation.FOOTER_EVENTS),
      href: '/events',
    },
  ]

  // TODO Update links
  const socials = [
    { href: 'http://fb.com', icon: <FBIcon /> },
    { href: 'http://tw.com', icon: <TWIcon /> },
    { href: 'http://ln.com', icon: <LNIcon /> },
    { href: 'http://yt.com', icon: <YTIcon /> },
    { href: 'http://gg.com', icon: <GGIcon /> },
  ]

  const copyright = t(Translation.FOOTER_COPYRIGHT)

  return (
    <footer>
      <div className="w-100 h-[120px] w-full bg-[url('/waveFooter.svg')] bg-cover bg-center bg-no-repeat" />
      <Container color="secondary">
        <div className="flex flex-col justify-between py-10 text-primary xl:flex-row xl:pb-5">
          <div className="order-2 mb-10 space-y-5 divide-primary border-b border-gray-thin pb-10 xl:order-1 xl:m-0 xl:divide-y xl:border-none xl:p-0">
            <p className="text-base font-medium">{t(Translation.FOOTER_CONTACTS)}</p>
            <ul className="text-primary-thin space-y-2.5 pt-0 text-sm xl:pt-5">
              <Link href="/contact-us">{t(Translation.FOOTER_CONTACT_US)}</Link>
              {contacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="order-4 space-y-5 divide-primary xl:order-2 xl:divide-y">
            <p className="text-base font-medium">{t(Translation.FOOTER_POLICIES_TITLE)}</p>
            <ul className="text-primary-thin space-y-2.5 pt-0 text-sm xl:pt-5">
              {policiesAndTerms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="order-3 mb-10 space-y-5 divide-primary border-b border-gray-thin pb-10 xl:order-3 xl:m-0 xl:divide-y xl:border-none xl:p-0">
            <p className="text-base font-medium">{t(Translation.FOOTER_NEWS_EVENTS_TITLE)}</p>
            <ul className="text-primary-thin space-y-2.5 pt-0 text-sm xl:pt-5">
              {dontMissOut.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 mb-10 space-y-5 divide-primary border-b border-gray-thin pb-10 xl:order-4 xl:m-0 xl:divide-y xl:border-none xl:p-0">
            <p className="text-base font-medium">{t(Translation.FOOTER_SOCIAL_MEDIA_TITLE)}</p>
            <div className="text-primary-thin text-sm">
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
              <p className="text-primary-thin mt-12 hidden text-sm underline xl:block">
                {copyright}
              </p>
            </div>
          </div>
        </div>
        <p className="text-primary-thin block pb-10 text-sm underline xl:hidden">{copyright}</p>
      </Container>
    </footer>
  )
}
