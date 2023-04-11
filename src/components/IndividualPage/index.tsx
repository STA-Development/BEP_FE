import React from 'react'
import { LocationIcon } from '@components/Icons'
import { MailIcon } from '@components/Icons/MailIcon'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

export const IndividualPage = () => (
  <div
    className="my-8 flex w-3/4 flex-col flex-wrap items-center justify-center
       overflow-hidden border-2 border-[#EAF0F3] hover:border-[#326789] xl:flex-row"
  >
    <div className="flex h-80 w-full flex-row items-center justify-center xl:w-1/3 ">
      <div className="flex h-full w-5/6 items-center justify-center rounded-md xl:w-3/4">
        <Image
          src="/default.png"
          alt="img"
          width={250}
          height={250}
          className=""
        />
      </div>
    </div>
    <div className="flex w-3/4 flex-col flex-wrap py-8 text-start xl:w-1/3 xl:py-0">
      <p className="flex w-full justify-start text-xl font-normal">Metal Factory {`"YMF"`}</p>
      <p className="flex w-3/4 justify-start pt-4 text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et.
        Mauris egestas consequat.{' '}
      </p>
      <div className="flex w-full flex-row py-8 xl:w-3/4">
        <Button size="lg">Details</Button>
      </div>
    </div>
    <div className="hidden w-full flex-col flex-wrap items-center py-16 text-center xl:flex xl:w-1/3">
      <div className="flex w-full justify-start pt-3 text-sm font-normal">
        <PhoneIcon />
        +374 94 574 984
      </div>
      <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
        <PhoneIcon />
        +374 94 574 984
      </div>
      <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
        <MailIcon />
        <p>metal.factory@gmail.com</p>
      </div>
      <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
        <LocationIcon />
        Abovyan st. 29, Yerevan
      </div>
    </div>
  </div>
)
