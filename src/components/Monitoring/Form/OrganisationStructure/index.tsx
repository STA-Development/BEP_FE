import React from 'react'
import { useTranslation } from 'react-i18next'
import ActivityAddress from '@components/Monitoring/Form/Introduction/fields/ActivityAddress'
import ActivityPeriod from '@components/Monitoring/Form/Introduction/fields/ActivityPeriod'
import CompanyName from '@components/Monitoring/Form/Introduction/fields/CompanyName'
import OrganizationType from '@components/Monitoring/Form/Introduction/fields/OrganizationType'
import Phone from '@components/Monitoring/Form/Introduction/fields/Phone'
import Position from '@components/Monitoring/Form/Introduction/fields/Position'
import Residence from '@components/Monitoring/Form/Introduction/fields/Residence'
import RespondentName from '@components/Monitoring/Form/Introduction/fields/RespondentName'
import Email from '@components/Monitoring/Form/OrganisationStructure/fields/Email'
import { Translation } from '@constants/translations'

const OrganizationStructure = () => {
  const [t] = useTranslation()

  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
      <div className="mb-5 flex justify-between text-xl">
        <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_TITLE_INTRODUCTION)}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <Residence />
        <CompanyName />
        <OrganizationType />
        <ActivityPeriod />
        <ActivityAddress />
        <RespondentName />
        <Position />
        <Email />
        <Phone />
      </div>
    </div>
  )
}

export default OrganizationStructure
