import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import Radio from '@uiComponents/Radio/Radio'

const HasDifficultiesWithVacancies = () => {
  const [t] = useTranslation()
  const fieldName = 'hadDifficultiesWithVacancies'
  const { control } = useFormContext()
  const { field } = useController({ name: fieldName, control })

  return (
    <div>
      <p>
        {t(
          Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_PERSONAL_HAS_DIFFICULTIES_WITH_VACANCIES
        )}
      </p>
      <div className="flex justify-between gap-2">
        <div className="flex w-[50%] items-center rounded border border-gray-200 pl-2 dark:border-gray-700">
          <Radio
            label={t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_OPTIONS_YES) as string}
            id="someId6"
            key="someId6"
            currentValue={field.value}
            {...field}
            value="true"
          />
        </div>
        <div className="flex w-[50%] items-center rounded border border-gray-200 pl-2 dark:border-gray-700">
          <Radio
            label={t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_OPTIONS_NO) as string}
            id="someId7"
            key="someId7"
            currentValue={field.value}
            {...field}
            value="false"
          />
        </div>
      </div>
    </div>
  )
}

export default HasDifficultiesWithVacancies
