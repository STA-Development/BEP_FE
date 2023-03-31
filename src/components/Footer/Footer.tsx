import React from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { FBIcon, GGIcon, LNIcon, TWIcon, YTIcon } from '@components/Icons'
import Link from 'next/link'

const contacts = [
  'E-mail: info@bep.am',
  'Telephone: (+374) 11528112',
  '34 Abovyan Street, office 7',
  'RA, Yerevan, 0009,',
]

const socials = [
  { href: 'http://fb.com', icon: <FBIcon /> },
  { href: 'http://tw.com', icon: <TWIcon /> },
  { href: 'http://ln.com', icon: <LNIcon /> },
  { href: 'http://yt.com', icon: <YTIcon /> },
  { href: 'http://gg.com', icon: <GGIcon /> },
]

// TODO Update links
export const Footer = () => (
  <Container color="primary">
    <div className="grid grid-flow-row grid-rows-footer-subscribe justify-between py-[40px] text-white xl:grid-flow-col">
      <div className="row-span-2 mb-10 xl:mb-0">
        <p className="mb-5 text-base font-medium">Contacts</p>
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
        <p className="mb-5 text-base font-medium">Policies and Terms of use</p>
        <ul className="mb-9">
          <li className="mb-2.5 text-base">
            <Link
              href="youtube.com"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
          <li className="mb-2.5 text-base">
            <Link
              href="youtube.com"
              className="hover:underline"
            >
              Terms of Use
            </Link>
          </li>
        </ul>
        <p className="text-base underline">Copyright © 2023 with all rights reserved</p>
      </div>
      <div className="order-first mb-10 flex xl:order-none xl:mb-7.5">
        <input
          type="text"
          placeholder="Your Email"
          className="rounded-l border-0 px-5 py-2.5 text-base text-black outline-0 placeholder:text-base placeholder:text-black-light"
        />
        <Button
          variant="outlined"
          color="secondary"
          radius="r"
        >
          Subscribe
        </Button>
      </div>
      <div>
        <p className="mb-5 text-base font-medium">Get in touch with us:</p>
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
