import React from 'react'
import { useTranslation } from 'react-i18next'
import FemaleCount from '@components/Monitoring/Form/OrganisationStructure/fields/common/FemaleCount'
import MaleCount from '@components/Monitoring/Form/OrganisationStructure/fields/common/MaleCount'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'

const SecondaryEducation = () => {
  const ageRange = useAppSelector(monitoringSelector?.ageRange)
  const [t] = useTranslation()
  const fieldName = 'secondaryEducation'

  return (
    <div className="radius rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_SECONDARY_EDUCATION)}
      </p>
      {ageRange?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <div className="radius rounded bg-primary px-4 pb-4 pt-2 ">
            <p className=" text-white">{item.name}</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              <MaleCount
                id={item.id}
                index={index}
                fieldName={fieldName}
              />
              <FemaleCount
                id={item.id}
                index={index}
                fieldName={fieldName}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SecondaryEducation
