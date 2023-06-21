import React from 'react'
import { useTranslation } from 'react-i18next'
import MultipleSelectionField from '@components/Monitoring/Form/common/MultipleSelectionField'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'

const StaffTrainingPeriod = () => {
  const [t] = useTranslation()
  const fieldName = 'trainingPeriod'
  const trainingPeriods = useAppSelector(monitoringSelector.trainingPeriod)

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_PERSONAL_STAFF_TRAINING_PERIODS)}
      </p>
      {trainingPeriods?.map((item, index) => (
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

export default StaffTrainingPeriod
