import React, { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { SexAtBirth } from '@allTypes/reduxTypes/usersStateTypes'
import { Translation } from '@constants/translations'
import TextField from '@uiComponents/FormFields/TextField'

const FemaleCount = ({
  id,
  index,
  fieldName,
}: {
  id: string
  index: number
  fieldName: string
}) => {
  const [t] = useTranslation()
  const femaleFieldName = `${fieldName}[${index}].female`
  const { control } = useFormContext()
  const { field } = useController({ name: femaleFieldName, control })
  const { onChange } = field

  const onFemaleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange({ ageRange: id, count: event.target.value, sexAtBirth: SexAtBirth.Female })
  }

  return (
    <TextField
      placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_GENDER_FEMALE) as string}
      fieldName={`${femaleFieldName}.count`}
      onChange={onFemaleChange}
    />
  )
}

export default FemaleCount
