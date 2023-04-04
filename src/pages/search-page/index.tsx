import React, { useState } from 'react'
import { Autocomplete } from '@components/Autocomplete'
import { LocationIcon } from '@components/Icons'
import { FilterIcon } from '@components/Icons/FilterIcon'
import { MailIcon } from '@components/Icons/MailIcon'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import { SearchIcon } from '@components/Icons/SearchIcon'
import { UserIcon } from '@components/Icons/UserIcon'
import Image from 'next/image'

interface Person {
  id: string
  name: string
}

const people: Person[] = [
  { id: '1', name: 'Durward Reynolds' },
  { id: '2', name: 'Kenton Towne' },
  { id: '3', name: 'Therese Wunsch' },
  { id: '4', name: 'Benedict Kessler' },
  { id: '5', name: 'Katelyn Rohan' },
]

// eslint-disable-next-line max-lines-per-function
export const X = () => {
  const [active, setActive] = useState(false)

  const openFilter = () => {
    setActive(!active)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-4 flex w-3/4 flex-col items-center justify-center">
        <div className="flex w-full flex-row flex-wrap">
          <div className="flex flex-row justify-start xs:w-full s:w-full xl:w-1/2">
            <p className="text-lg font-normal">Educational Institutes</p>
          </div>
          <div className="flex flex-row justify-end xs:w-1/2 xs:justify-start xl:w-1/2 xl:justify-end">
            <p className="mx-1 cursor-pointer">Home</p>
            <p>/</p>
            <p className="mx-1 cursor-pointer">Masters</p>
          </div>
          <div className="w-1/2 flex-row justify-end text-[#326789] xs:flex xs:w-1/2 xs:justify-end xl:hidden ">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <p
              className="mx-1 flex cursor-pointer flex-row"
              onClick={openFilter}
            >
              <FilterIcon />
              {`${!active ? `Open Filters` : `Close Filters`}`}
            </p>
          </div>
        </div>

        <div
          className={`w-full py-4 l:flex-row xl:flex ${active ? `l:flex` : `l:hidden`} ${
            active ? `xs:flex` : `xs:hidden`
          }
            xs:flex-col`}
        >
          <div
            className="flex flex-row border-[.5px] border-gray-700 xs:w-full xs:py-4 xs:px-1 l:w-1/5
                l:rounded-l-lg l:py-0 l:px-0"
          >
            <p className="flex items-center justify-center pl-4">Specialization</p>
          </div>

          <div
            className="flex flex-row border-[.5px] border-gray-700 xs:w-full
                l:w-1/5"
          >
            <Autocomplete
              inputClasses="border-none"
              classes="w-full"
              items={people}
              placeholder="Specialization"
            />
          </div>

          <div
            className="flex flex-row border-[.5px] border-gray-700 xs:w-full
                l:w-1/5"
          >
            <Autocomplete
              inputClasses="border-none"
              classes="w-full"
              items={people}
              placeholder="Specialization"
            />
          </div>
          <div
            className="flex flex-row border-[.5px] border-gray-700 xs:w-full
                l:w-1/5"
          >
            <Autocomplete
              inputClasses="border-none"
              classes="w-full"
              items={people}
              placeholder="Specialization"
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-start bg-[#326789] text-sm font-normal text-white
                 xs:rounded-none xs:py-4 l:rounded-r-lg
                 l:py-0 xl:w-32"
          >
            <p className="flex justify-start px-4">Search</p>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-center py-8">
        <div className="h-auto w-3/4 border-t-2" />
      </div>

      <div
        className="sm:flex-col my-8 flex w-3/4 flex-wrap overflow-hidden border-2
       border-[#EAF0F3] hover:border-[#326789] xs:items-center xs:justify-center s:items-center s:justify-center xl:flex-row"
      >
        <div className="flex flex-row items-center justify-center xs:h-80 xs:w-full s:h-80 s:w-full xl:h-80 xl:w-1/3 ">
          <div className="flex h-full w-3/4 items-center justify-center rounded-md xs:w-5/6 s:w-5/6">
            <Image
              src="/default.png"
              alt="img"
              width={250}
              height={250}
              className=""
            />
          </div>
        </div>

        <div className="lg:py-16 flex flex-col flex-wrap text-start xs:w-3/4 xs:py-8 s:w-3/4 s:py-8 xl:w-1/3">
          <p className="flex w-full justify-start text-xl font-normal">Metal Factory {`"YMF"`}</p>
          <p className="flex w-3/4 justify-start pt-4 text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et.
            Mauris egestas consequat.{' '}
          </p>
          <button
            type="button"
            className="my-8 rounded-xl bg-[#326789] px-5 py-2.5 text-sm font-normal text-white xl:w-1/2
                 "
          >
            Details
          </button>
        </div>

        <div className="flex-col flex-wrap items-center py-16 text-center xs:hidden xs:w-full s:hidden s:w-full xl:flex xl:w-1/3">
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <PhoneIcon />
            +374 94 574 984
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <PhoneIcon />
            +374 94 574 984
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <MailIcon />
            metal.factory@gmail.com
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <LocationIcon />
            Abovyan st. 29, Yerevan
          </p>
        </div>
      </div>

      <div
        className="sm:flex-col my-8 flex w-3/4 flex-wrap overflow-hidden border-2
       border-[#EAF0F3] hover:border-[#326789] xs:items-center xs:justify-center s:items-center s:justify-center xl:flex-row"
      >
        <div className="flex flex-row items-center justify-center xs:h-80 xs:w-full s:h-80 s:w-full xl:h-80 xl:w-1/3 ">
          <div className="flex h-full w-3/4 items-center justify-center rounded-md xs:w-5/6 s:w-5/6">
            <Image
              src="/default.png"
              alt="img"
              width={250}
              height={250}
              className=""
            />
          </div>
        </div>

        <div className="lg:py-16 flex flex-col flex-wrap text-start xs:w-3/4 xs:py-8 s:w-3/4 s:py-8 xl:w-1/3">
          <p className="flex w-full justify-start text-xl font-normal">Metal Factory {`"YMF"`}</p>
          <p className="flex w-3/4 justify-start pt-4 text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et.
            Mauris egestas consequat.{' '}
          </p>
          <button
            type="button"
            className="my-8 rounded-xl bg-[#326789] px-5 py-2.5 text-sm font-normal text-white xl:w-1/2
                 "
          >
            Details
          </button>
        </div>

        <div className="flex-col flex-wrap items-center py-16 text-center xs:hidden xs:w-full s:hidden s:w-full xl:flex xl:w-1/3">
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            +374 94 574 984
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            +374 94 574 984
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            metal.factory@gmail.com
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            Abovyan st. 29, Yerevan
          </p>
        </div>
      </div>

      <div
        className="sm:flex-col my-8 flex w-3/4 flex-wrap overflow-hidden border-2
       border-[#EAF0F3] hover:border-[#326789] xs:items-center xs:justify-center s:items-center s:justify-center xl:flex-row"
      >
        <div className="flex flex-row items-center justify-center xs:h-80 xs:w-full s:h-80 s:w-full xl:h-80 xl:w-1/3 ">
          <div className="flex h-full w-3/4 items-center justify-center rounded-md xs:w-5/6 s:w-5/6">
            <Image
              src="/default.png"
              alt="img"
              width={250}
              height={250}
              className=""
            />
          </div>
        </div>

        <div className="lg:py-16 flex flex-col flex-wrap text-start xs:w-3/4 xs:py-8 s:w-3/4 s:py-8 xl:w-1/3">
          <p className="flex w-full justify-start text-xl font-normal">Metal Factory {`"YMF"`}</p>
          <p className="flex w-3/4 justify-start pt-4 text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et.
            Mauris egestas consequat.{' '}
          </p>
          <button
            type="button"
            className="my-8 rounded-xl bg-[#326789] px-5 py-2.5 text-sm font-normal text-white xl:w-1/2
                 "
          >
            Details
          </button>
        </div>

        <div className="flex-col flex-wrap items-center py-16 text-center xs:hidden xs:w-full s:hidden s:w-full xl:flex xl:w-1/3">
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            +374 94 574 984
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            +374 94 574 984
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            metal.factory@gmail.com
          </p>
          <p className="flex w-full justify-start pt-3 text-sm font-normal">
            <UserIcon />
            Abovyan st. 29, Yerevan
          </p>
        </div>
      </div>
    </div>
  )
}

export default X
