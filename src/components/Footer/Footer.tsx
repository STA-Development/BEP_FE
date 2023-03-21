import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'

import fbSvg from '~/icons/socials/fb.svg'
import ggSvg from '~/icons/socials/gg.svg'
import lnSvg from '~/icons/socials/ln.svg'
import twSvg from '~/icons/socials/tw.svg'
import ytSvg from '~/icons/socials/yt.svg'

const contacts = [
  'E-mail: info@bep.am',
  'Telephone: (+374) 11528112',
  '34 Abovyan Street, office 7',
  'RA, Yerevan, 0009,',
]

const socials = [
  { icon: fbSvg },
  { icon: twSvg },
  { icon: lnSvg },
  { icon: ytSvg },
  { icon: ggSvg },
]

export const Footer = () => (
  <div className="bg-primary">
    <div className="container">
      <div className="grid grid-flow-row grid-rows-footer-subscribe justify-between py-[40px] text-white lg:grid-flow-col">
        <div className="row-span-2 mb-10 lg:mb-0">
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
                href=""
                className="hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2.5 text-base">
              <Link
                href=""
                className="hover:underline"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
          <p className="text-base underline">Copyright © 2023 with all rights reserved</p>
        </div>
        <div className="order-first mb-10 flex lg:order-none lg:mb-7.5">
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
            {socials.map((social, index) => (
              <Link
                key={index}
                href=""
                className="mr-5 flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <Image
                  src={social.icon}
                  alt="icon"
                ></Image>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)
