import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import Radio from '@uiComponents/Radio/Radio'

const HasStudentsOrPractitioner = () => {
  const [t] = useTranslation()
  const fieldName = 'hasStudentsOrPractitioner'
  const { control } = useFormContext()
  const { field } = useController({ name: fieldName, control })

  return (
    <div>
      <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_HAS_STUDENTS_OR_PRACTITIONER)}</p>
      <div className="flex justify-between gap-2">
        <div className="flex w-[50%] items-center rounded border border-gray-200 pl-2 dark:border-gray-700">
          <Radio
            label={t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_OPTIONS_YES) as string}
            id="someId1"
            key="someId1"
            currentValue={field.value}
            {...field}
            value="true"
          />
        </div>
        <div className="flex w-[50%] items-center rounded border border-gray-200 pl-2 dark:border-gray-700">
          <Radio
            label={t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_OPTIONS_NO) as string}
            id="someId2"
            key="someId2"
            currentValue={field.value}
            {...field}
            value="false"
          />
        </div>
      </div>
    </div>
  )
}

export default HasStudentsOrPractitioner
