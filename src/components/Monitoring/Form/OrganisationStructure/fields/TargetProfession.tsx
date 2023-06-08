import React, { useMemo } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@components/Icons/PlusIcon'
import MultipleInputWithCount from '@components/Monitoring/Form/OrganisationStructure/fields/common/MultipleInpuWithCount'
import { Translation } from '@constants/translations'

const TargetProfession = () => {
  const [t] = useTranslation()
  const fieldName = 'targetProfession'
  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ name: fieldName, control })

  const isMinusButtonVisible = useMemo(() => fields.length > 1, [fields])

  const onPlusClick = () => {
    append({ value: '', count: null })
  }

  const onRemoveField = (index: number) => {
    remove(index)
  }

  return (
    <div className="radius relative rounded bg-primary-light p-6">
      <p className="text-white">
        {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ORGANIZATION_TARGET_PROFESSION)}
      </p>
      <div className="absolute right-6 top-6 cursor-pointer">
        <PlusIcon
          onClick={onPlusClick}
          fill="fill-secondary"
        />
      </div>
      {fields?.map((item, index) => (
        <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
          <MultipleInputWithCount
            isMinusButtonVisible={isMinusButtonVisible}
            key={item.id}
            placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_PLACEHOLDER_PROFESSION)}
            index={index}
            fieldName={fieldName}
            onRemoveField={onRemoveField}
          />
        </div>
      ))}
    </div>
  )
}

export default TargetProfession
