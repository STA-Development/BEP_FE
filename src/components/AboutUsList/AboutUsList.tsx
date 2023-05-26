import React from 'react'
import { IAboutUsListProps } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { AboutUsMenu } from '@components/AboutUsMenu'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import Image from 'next/image'

interface IMemberListProps {
  setChangeMember: (id: string) => void
  member: IAboutUsListProps
}

export const AboutUsList = ({ setChangeMember, member }: IMemberListProps) => {
  const { role } = useAppSelector(usersSelector.user)

  return (
    <div>
      <div
        className="group mb-30 flex w-full flex-col xl:px-30"
        key={member.uuid}
      >
        {role === Roles.Admin ? (
          <div className="mb-5 flex w-full items-end">
            <AboutUsMenu
              setChangeMember={setChangeMember}
              uuid={member.uuid}
            />
          </div>
        ) : null}
        <div className="flex flex-col xl:flex-row">
          <div
            className="mb-10 mr-20 flex w-full flex-none justify-center group-odd:mr-0
              xl:w-[350px] xl:flex-row xl:flex-col xl:group-odd:order-last xl:group-odd:ml-20"
          >
            <Image
              src={member.imageURL}
              loader={() => member.imageURL ?? ''}
              width={350}
              height={400}
              className="max-h-[450px] max-w-[450px] xl:mb-5"
              alt="picture"
            />
            <p className="hidden text-base italic text-black-light group-odd:text-right xl:block xl:text-left">
              {member.imageDescription}
            </p>
          </div>
          <div>
            <h3 className="mb-2.5 text-xl font-medium text-primary xl:text-2xl">{member.header}</h3>
            <p className="mb-10 text-base text-black-light">{member.paragraph}</p>

            <p className="block text-base italic text-black-light xl:hidden">
              {member.imageDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
