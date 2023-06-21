import React from 'react'
import { useTranslation } from 'react-i18next'
import MultipleSelectionField from '@components/Monitoring/Form/common/MultipleSelectionField'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'

const WorkChallengeAffects = () => {
  const [t] = useTranslation()
  const fieldName = 'workChallengeAffects'
  const workChallengeAffects = useAppSelector(monitoringSelector.workChallengeAffects)

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_PERSONAL_WORK_CHALLENGE_AFFECTS)}
      </p>
      {workChallengeAffects?.map((item, index) => (
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

export default WorkChallengeAffects
