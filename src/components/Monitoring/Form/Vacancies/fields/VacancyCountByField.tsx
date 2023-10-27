import React from 'react'
import { useTranslation } from 'react-i18next'
import EnumInputWithCount from '@components/Monitoring/Form/common/EnumInputWithCount'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'

const VacancyCountByField = () => {
  const [t] = useTranslation()
  const fieldName = 'vacancyCountByField'
  const vacancyFields = useAppSelector(monitoringSelector.vacancyCountByField)

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_VACANCIES_HOW_MANY_VACANCIES_FILED)}
      </p>
      {vacancyFields?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <EnumInputWithCount
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

export default VacancyCountByField
