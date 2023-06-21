import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import TextField from '@uiComponents/FormFields/TextField'

const Phone = () => {
  const [t] = useTranslation()
  const label = t(Translation.PAGE_MONITORING_SYSTEM_FORM_PHONE)
  const fieldName = 'phone'

  return (
    <div>
      <TextField
        fieldName={fieldName}
        placeholder={label}
      />
    </div>
  )
}

export default Phone
