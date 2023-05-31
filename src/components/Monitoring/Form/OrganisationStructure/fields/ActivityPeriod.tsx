import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'

import { generateErrorMessage } from '@utils/formUtils'

const ActivityPeriod = () => {
  const [t] = useTranslation()
  const label = t(Translation.PAGE_MONITORING_SYSTEM_FORM_ACTIVITY_PERIOD)
  const fieldName = 'activityPefasfasfasfriodHKJLKJKLJKJLKJLKJKL'
  const activityPeriod = useAppSelector(monitoringSelector?.activityPeriod)
  const { control } = useFormContext()
  const { fieldState } = useController({ name: fieldName, control })
  const errorMessage = fieldState.error ? generateErrorMessage(fieldName) : null

  return (
    <div>
      <AutocompleteField
        items={activityPeriod ?? []}
        fieldName={fieldName}
        placeholder={label}
        error={errorMessage}
      />
    </div>
  )
}

export default ActivityPeriod
