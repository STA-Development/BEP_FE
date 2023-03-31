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
  { icon: <FBIcon /> },
  { icon: <TWIcon /> },
  { icon: <LNIcon /> },
  { icon: <YTIcon /> },
  { icon: <GGIcon /> },
]

// TODO Update links
export const Footer = () => (
  <div className="bg-primary">
    <Container>
      <div className="lg:grid-flow-col grid grid-flow-row grid-rows-footer-subscribe justify-between py-[40px] text-white">
        <div className="lg:mb-0 row-span-2 mb-10">
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
        <div className="lg:0 row-span-2 mb-10">
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
        <div className="lg:order-none lg:mb-7.5 order-first mb-10 flex">
          <input
            type="text"
            placeholder="Your Email"
            className="rounded-l border-0 px-5 py-2.5 text-base text-black outline-0 placeholder:text-base placeholder:text-black-light"
          />
          <Button
            variant="outlined"
            color="secondary"
            radius="r"
            className="w-[122px]"
          >
            Subscribe
          </Button>
        </div>
        <div>
          <p className="mb-5 text-base font-medium">Get in touch with us:</p>
          <div className="flex">
            {socials.map((social) => (
              <Link
                href="youtube.com"
                className="mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </div>
)
