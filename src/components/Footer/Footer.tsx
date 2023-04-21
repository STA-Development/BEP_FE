import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { FBIcon, GGIcon, LNIcon, TWIcon, YTIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

// eslint-disable-next-line react-hooks/rules-of-hooks

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

  const socials = [
    { href: 'http://fb.com', icon: <FBIcon /> },
    { href: 'http://tw.com', icon: <TWIcon /> },
    { href: 'http://ln.com', icon: <LNIcon /> },
    { href: 'http://yt.com', icon: <YTIcon /> },
    { href: 'http://gg.com', icon: <GGIcon /> },
  ]

  return (
    <Container color="primary">
      <div className="grid grid-flow-row grid-rows-footer-subscribe justify-between py-[40px] text-white xl:grid-flow-col">
        <div className="row-span-2 mb-10 xl:mb-0">
          <p className="mb-5 text-base font-medium">{t(Translation.FOOTER_CONTACTS)}</p>
          <ul>
            {contacts.map((contact) => (
              <li
                key={contact}
                className="mb-2.5 text-sm"
              >
                {contact}
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:0 row-span-2 mb-10">
          <p className="mb-5 text-base font-medium">{t(Translation.FOOTER_POLICIES_TITLE)}</p>
          <ul className="mb-9">
            <li className="mb-2.5 text-base">
              <Link
                href="youtube.com"
                className="hover:underline"
              >
                {t(Translation.FOOTER_PRIVACY_POLICY)}
              </Link>
            </li>
            <li className="mb-2.5 text-base">
              <Link
                href="youtube.com"
                className="hover:underline"
              >
                {t(Translation.FOOTER_TERMS)}
              </Link>
            </li>
          </ul>
          <p className="text-base underline">{t(Translation.FOOTER_COPYRIGHT)}</p>
        </div>
        <div className="order-first mb-10 flex xl:order-none xl:mb-7.5">
          <input
            type="text"
            placeholder={`${t(Translation.FOOTER_EMAIL_INPUT)}`}
            className="rounded-l border-0 px-5 py-2.5 text-base text-black outline-0 placeholder:text-base placeholder:text-black-light"
          />
          <Button
            variant="outlined"
            color="secondary"
            radius="r"
          >
            {t(Translation.FOOTER_SUBSCRIBE)}
          </Button>
        </div>
        <div>
          <p className="mb-5 text-base font-medium">{t(Translation.FOOTER_SOCIAL_MEDIA)}</p>
          <div className="flex">
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                className="mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
