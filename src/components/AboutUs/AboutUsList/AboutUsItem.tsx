import React from 'react'
import { IAboutUsListProps } from '@allTypes/reduxTypes/aboutUsStateTypes'
import Image from 'next/image'

interface IMemberListProps {
  member: IAboutUsListProps
  index: number
}

export const AboutUsItem = ({ member, index }: IMemberListProps) => {
  const isIndexOdd: boolean = index % 2 === 1

  return (
    <div
      key={member.uuid}
      className="border-1 flex flex-col xl:flex-row xl:justify-between"
    >
      <div
        className={`mb-10 mr-20
         flex w-full flex-none justify-center
              xl:w-[350px] xl:flex-row xl:flex-col ${
                !isIndexOdd
                  ? ` xl:group-odd:order-first`
                  : `group-odd:mr-0 xl:group-odd:order-last xl:group-odd:ml-20`
              } `}
      >
        <Image
          src={member.imageURL ?? ''}
          loader={() => member.imageURL ?? ''}
          width={500}
          height={400}
          className="h-[400px] w-[500px] object-cover xl:mb-5"
          alt="picture"
        />
        <p className="hidden text-base italic text-black-light group-odd:text-right xl:block xl:text-left">
          {member.imageDescription}
        </p>
      </div>
      <div className="flex w-full max-w-[500px] flex-col">
        <h3 className="mb-2.5 break-words text-xl font-medium text-primary xl:text-2xl">
          {member.header}
        </h3>
        <p className="mb-10 text-base text-black-light">{member.paragraph}</p>

        <p className="block text-base italic text-black-light xl:hidden">
          {member.imageDescription}
        </p>
      </div>
    </div>
  )
}
