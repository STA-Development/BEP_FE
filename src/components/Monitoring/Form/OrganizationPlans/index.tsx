import React from 'react'
import { useTranslation } from 'react-i18next'
import AdditionalPositions from '@components/Monitoring/Form/OrganizationPlans/fields/AdditionalPositions'
import BusinessPerspective from '@components/Monitoring/Form/OrganizationPlans/fields/BusinessPerspective'
import PlannedPositions from '@components/Monitoring/Form/OrganizationPlans/fields/PlannedPositions'
import PositionCuts from '@components/Monitoring/Form/OrganizationPlans/fields/PositionCuts'
import PositionNecessityReason from '@components/Monitoring/Form/OrganizationPlans/fields/PositionNecessityReason'
import { Translation } from '@constants/translations'

const OrganizationStructure = () => {
  const [t] = useTranslation()

  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
      <div className="mb-5 flex justify-between text-xl">
        <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_TITLE_ORGANIZATION_PLANS)}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <BusinessPerspective />
        <PositionCuts />
        <AdditionalPositions />
        <PlannedPositions />
        <PositionNecessityReason />
      </div>
    </div>
  )
}

export default OrganizationStructure
