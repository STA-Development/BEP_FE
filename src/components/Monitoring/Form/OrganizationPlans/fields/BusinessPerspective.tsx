import React from 'react'
import { useTranslation } from 'react-i18next'
import MultipleInputWithCount from '@components/Monitoring/Form/common/EnumInputWithCheckBox'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'

const BusinessPerspective = () => {
  const [t] = useTranslation()
  const fieldName = 'businessPerspective'
  const businessPerspective = useAppSelector(monitoringSelector.businessPerspective)

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_PLANS_BUSINESS_PERSPECTIVE)}
      </p>
      {businessPerspective?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <MultipleInputWithCount
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

export default BusinessPerspective
