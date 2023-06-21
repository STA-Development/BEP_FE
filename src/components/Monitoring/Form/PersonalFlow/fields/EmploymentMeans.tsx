import React from 'react'
import { useTranslation } from 'react-i18next'
import MultipleSelectionField from '@components/Monitoring/Form/common/MultipleSelectionField'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'

const EmploymentMeans = () => {
  const [t] = useTranslation()
  const fieldName = 'employmentMeans'
  const employmentMeans = useAppSelector(monitoringSelector.employmentMeans)

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_PERSONAL_FILL_EMPTY_VACANCIES)}
      </p>
      {employmentMeans?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <MultipleSelectionField
            fieldLabel={item.name}
            index={index}
            fieldId={item.id}
            fieldName={fieldName}
          />
        </div>
      ))}
    </div>
  )
}

export default EmploymentMeans
