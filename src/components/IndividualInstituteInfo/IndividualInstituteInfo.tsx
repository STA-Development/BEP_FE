import React from 'react'
import { useTranslation } from 'react-i18next'
import { IIndividualEducationalInstituteResponse } from '@axios/educational-institutes/edInstitutesManagerTypes'
import { LocationIcon } from '@components/Icons'
import { Clock } from '@components/Icons/Clock'
import { MailIcon } from '@components/Icons/MailIcon'
import { PeopleQueue } from '@components/Icons/PeopleQueue'
import { PersonAccount } from '@components/Icons/PersonAccount'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import { SuitCase } from '@components/Icons/SuitCase'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'

interface IIndividualInstituteInfoProps {
  individualEduInstitutes: IIndividualEducationalInstituteResponse
}

export const IndividualInstituteInfo = ({
  individualEduInstitutes,
}: IIndividualInstituteInfoProps) => {
  const [t] = useTranslation()

  return (
    <div className="flex w-full flex-col flex-wrap items-start xl:w-1/2 xl:items-center">
      <div className="flex w-full flex-col flex-wrap xl:w-3/4">
        <p className="w-full py-2 pt-8 text-lg">{individualEduInstitutes?.name}</p>
        <p className="hidden w-full text-sm xl:flex">{individualEduInstitutes?.subtitle}</p>
        <p className="flex w-full text-sm xl:hidden">
          {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_TITLE)}
        </p>
      </div>
      <div className="flex w-full flex-row py-4 xl:hidden">
        <Button size="lg">
          {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_SEND_EMAIL)}
        </Button>
      </div>
      <div className="flex w-full flex-col flex-wrap py-4 xl:w-3/4 xl:flex-row">
        <div className="flex w-full flex-col flex-wrap xl:w-1/2">
          <span className="w-full py-2 text-lg font-medium xl:text-sm">
            {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_INSTITUTE_INFO_REQUIREMENTS)}
          </span>
          <div className="flex w-full flex-row items-center py-2">
            <PersonAccount />{' '}
            <p className="px-2 text-lg xl:text-sm">{individualEduInstitutes?.rector}</p>
          </div>
          <div className="flex w-full flex-row items-center py-2">
            <PeopleQueue />{' '}
            <p className="px-2 text-lg xl:text-sm">{individualEduInstitutes?.studentQuantity}</p>
          </div>
          <div className="flex w-full flex-row items-center py-2">
            <SuitCase />{' '}
            <p className="px-2 text-lg xl:text-sm">{individualEduInstitutes?.lecturerQuantity}</p>
          </div>
          <div className="flex w-full flex-row items-center py-2">
            <Clock />{' '}
            <p className="px-2 text-lg xl:text-sm">
              {individualEduInstitutes?.startTime}-{individualEduInstitutes?.endTime}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col flex-wrap xl:w-1/2">
          <span className="w-full py-2 text-lg font-medium xl:text-sm">
            {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_INSTITUTE_CONTACTS)}
          </span>
          <div className="flex w-full flex-row items-center py-2">
            <PhoneIcon />{' '}
            <p className="px-2 text-lg xl:text-sm">{individualEduInstitutes?.phone}</p>
          </div>
          <div className="flex w-full flex-row items-center py-2">
            <MailIcon /> <p className="px-2 text-lg xl:text-sm">{individualEduInstitutes?.email}</p>
          </div>
          <div className="flex w-full flex-row items-center py-2">
            <LocationIcon />{' '}
            <p className="px-2 text-lg xl:text-sm">{individualEduInstitutes?.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
