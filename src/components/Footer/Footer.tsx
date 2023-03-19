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
  <div className="bg-blue">
    <div className="container">
      <div className="py-[40px] grid grid-flow-row lg:grid-flow-col grid-rows-footer-subscribe justify-between text-white">
        <div className="row-span-2 mb-10 lg:mb-0">
          <p className="text-base font-medium mb-5">Contacts</p>
          <ul>
            {contacts.map((contact) => (
              <li
                key={contact}
                className="text-sm mb-2.5"
              >
                {contact}
              </li>
            ))}
          </ul>
        </div>
        <div className="row-span-2 mb-10 lg:0">
          <p className="text-base font-medium mb-5">Policies and Terms of use</p>
          <ul className="mb-9">
            <li className="text-base mb-2.5">
              <Link href="">Privacy Policy</Link>
            </li>
            <li className="text-base mb-2.5">
              <Link href="">Terms of Use</Link>
            </li>
          </ul>
          <p className="text-base underline">Copyright © 2023 with all rights reserved</p>
        </div>
        <div className="order-first lg:order-none flex mb-10 lg:mb-7.5">
          <input
            type="text"
            placeholder="Your Email"
            className="text-black px-5 py-2.5 text-base border-0 rounded-l outline-0 placeholder:text-black-light placeholder:text-base"
          />
          <Button
            variant="outlined"
            radius="r"
          >
            Subscribe
          </Button>
        </div>
        <div>
          <p className="text-base font-medium mb-5">Get in touch with us:</p>
          <div className="flex">
            {socials.map((social, index) => (
              <Link
                key={index}
                href=""
                className="flex justify-center items-center mr-5 w-12 h-12 rounded-full bg-white"
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
