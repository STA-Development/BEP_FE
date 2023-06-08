import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import DemandingProfession from '@components/Monitoring/Form/OrganisationStructure/fields/DemandingProfession'
import HasStudentsOrPractitioner from '@components/Monitoring/Form/OrganisationStructure/fields/HasStudentsOrPractitioner'
import HigherEducation from '@components/Monitoring/Form/OrganisationStructure/fields/HigherEducation'
import SecondaryEducation from '@components/Monitoring/Form/OrganisationStructure/fields/SecondaryEducation'
import TargetProfession from '@components/Monitoring/Form/OrganisationStructure/fields/TargetProfession'
import VocationalEducation from '@components/Monitoring/Form/OrganisationStructure/fields/VocationalEducation'
import { Translation } from '@constants/translations'

const OrganizationStructure = () => {
  const [t] = useTranslation()
  const { watch } = useFormContext()
  const hasStudentsOrPractitioner = watch('hasStudentsOrPractitioner') === 'true'

  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
      <div className="mb-5 flex justify-between text-xl">
        <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_TITLE_ORGANIZATION_STRUCTURE)}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <SecondaryEducation />
        <VocationalEducation />
        <HigherEducation />
        <HasStudentsOrPractitioner />
        {hasStudentsOrPractitioner ? <DemandingProfession /> : <TargetProfession />}
      </div>
    </div>
  )
}

export default OrganizationStructure
