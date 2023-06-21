import React, { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { SexAtBirth } from '@allTypes/reduxTypes/usersStateTypes'
import { Translation } from '@constants/translations'
import TextField from '@uiComponents/FormFields/TextField'

const MaleCount = ({ id, index, fieldName }: { id: string; index: number; fieldName: string }) => {
  const [t] = useTranslation()
  const maleFieldName = `${fieldName}[${index}].male`
  const { control } = useFormContext()
  const { field } = useController({ name: maleFieldName, control })
  const { onChange } = field
  const onMaleCountChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange({ ageRange: id, count: event.target.value, sexAtBirth: SexAtBirth.Male })
  }

  return (
    <TextField
      placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_GENDER_MALE) as string}
      fieldName={`${maleFieldName}.count`}
      onChange={onMaleCountChange}
    />
  )
}

export default MaleCount
