import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Other from '@components/Monitoring/Form/common/Other'
import { FormValues } from '@components/Monitoring/Form/helper'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'

import { generateErrorMessage } from '@utils/formUtils'

const OrganizationType = () => {
  const [t] = useTranslation()
  const { watch } = useFormContext()
  const label = t(Translation.PAGE_MONITORING_SYSTEM_FORM_COMPANY_TYPE)
  const otherLabel = t(Translation.PAGE_MONITORING_SYSTEM_FORM_OTHER)
  const fieldName = 'organizationType'
  const otherFieldName = 'organizationTypeOther'
  const organizationType = useAppSelector(monitoringSelector?.organizationType)
  const isOther = watch(fieldName)?.id === FormValues.OTHER
  const { control } = useFormContext()
  const { fieldState } = useController({ name: fieldName, control })
  const errorMessage = fieldState.error ? generateErrorMessage(fieldName) : null

  return (
    <div className="radius rounded bg-primary-light p-6">
      <AutocompleteField
        items={organizationType ?? []}
        fieldName={fieldName}
        placeholder={label}
        error={errorMessage}
      />
      {isOther ? (
        <Other
          fieldName={otherFieldName}
          placeholder={otherLabel}
        />
      ) : null}
    </div>
  )
}

export default OrganizationType
