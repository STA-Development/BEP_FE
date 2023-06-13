import React, { useMemo } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@components/Icons/PlusIcon'
import MultipleInput from '@components/Monitoring/Form/common/MultipleInput'
import { Translation } from '@constants/translations'

const DifficultVacancies = () => {
  const [t] = useTranslation()
  const fieldName = 'difficultVacancies'
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ name: fieldName, control })

  const isMinusButtonVisible = useMemo(() => fields.length > 1, [fields])

  const onPlusClick = () => {
    append(null)
  }

  const onRemoveField = (index: number) => {
    remove(index)
  }

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_PERSONAL_DIFFICULT_VACANCIES)}
      </p>
      <div className="absolute right-6 top-6 cursor-pointer">
        <PlusIcon
          onClick={onPlusClick}
          fill="fill-secondary"
        />
      </div>
      {fields?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <MultipleInput
            key={item.id}
            index={index}
            onRemoveField={onRemoveField}
            isMinusButtonVisible={isMinusButtonVisible}
            fieldName={fieldName}
          />
        </div>
      ))}
    </div>
  )
}

export default DifficultVacancies
