import React, { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FormValues } from '@components/Monitoring/Form/helper'
import { Translation } from '@constants/translations'
import TextField from '@uiComponents/FormFields/TextField'

const MultipleInputWithCount = ({
  fieldName,
  index,
  fieldLabel,
  fieldId,
}: {
  fieldName: string
  fieldId: string
  index: number
  fieldLabel: string
}) => {
  const [t] = useTranslation()
  const countFieldName = `${fieldName}[${index}]`

  const { control } = useFormContext()

  const { field } = useController({ name: countFieldName, control })
  const { onChange } = field

  const onCountChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange({ count: event.target.value, value: fieldId })
  }

  const onOtherChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange({
      count: field?.value?.count ?? 0,
      value: FormValues.OTHER,
      other: event.target.value,
    })
  }

  return (
    <div className=" radius relative rounded bg-primary pb-4 pl-4 pr-6 pt-6 ">
      <div className="grid grid-cols-3 items-center gap-x-2 gap-y-2">
        <div className="col-span-2">
          {fieldLabel !== FormValues.OTHER ? (
            <p className="text-white">{fieldLabel}</p>
          ) : (
            <TextField
              fieldName="firingReasonOther"
              onChange={onOtherChange}
              placeholder={FormValues.OTHER}
            />
          )}
        </div>
        <div>
          <TextField
            placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_PLACEHOLDER_COUNT) as string}
            fieldName={`${fieldName}[${index}].count`}
            onChange={onCountChange}
          />
        </div>
      </div>
    </div>
  )
}

export default MultipleInputWithCount
