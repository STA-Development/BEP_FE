import React, { useMemo } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { MinusIcon } from '@components/Icons/MinusIcon'
import { PlusIcon } from '@components/Icons/PlusIcon'
import Count from '@components/Monitoring/Form/Vacancies/fields/VacancyDataFields.tsx/Count'
import Date from '@components/Monitoring/Form/Vacancies/fields/VacancyDataFields.tsx/Date'
import JobName from '@components/Monitoring/Form/Vacancies/fields/VacancyDataFields.tsx/JobName'
import RequiredEducation from '@components/Monitoring/Form/Vacancies/fields/VacancyDataFields.tsx/RequiredEducation'
import { Translation } from '@constants/translations'

const VacancyData = () => {
  const [t] = useTranslation()
  const fieldName = 'vacancyData'
  const { control, watch } = useFormContext()
  const { fields, append, remove } = useFieldArray({ name: fieldName, control })

  const isMinusButtonVisible = useMemo(() => fields.length > 1, [fields])

  const onPlusClick = () => {
    append({ value: '', count: null })
  }

  const onRemoveField = () => {
    const fieldsLength = watch(fieldName).length

    remove(fieldsLength - 1)
  }

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_VACANCIES_WHAT_VACANCIES_YOU_NEED)}
      </p>
      <div className="absolute right-6 top-6 flex cursor-pointer items-center gap-2">
        <PlusIcon
          onClick={onPlusClick}
          fill="fill-secondary"
        />
        {isMinusButtonVisible ? (
          <MinusIcon
            onClick={onRemoveField}
            width={25}
            height={25}
            fill="fill-white"
          />
        ) : null}
      </div>
      {fields?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <div className=" radius relative rounded bg-primary pb-4 pl-4 pr-6 pt-6 ">
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              <JobName
                key={item.id}
                placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_PLACEHOLDER_PROFESSION)}
                index={index}
                fieldName={fieldName}
              />
              <RequiredEducation
                key={item.id}
                placeholder={t(
                  Translation.PAGE_MONITORING_SYSTEM_FORM_VACANCIES_PLACEHOLDER_REQUIRED_EDUCATION
                )}
                index={index}
                fieldName={fieldName}
              />
              <Count
                key={item.id}
                placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_VACANCIES_PLACEHOLDER_COUNT)}
                index={index}
                fieldName={fieldName}
              />
              <Date
                key={item.id}
                placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_VACANCIES_PLACEHOLDER_YEAR)}
                index={index}
                fieldName={fieldName}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VacancyData
