import React, { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FormValues } from '@components/Monitoring/Form/helper'
import Checkbox from '@uiComponents/FormFields/CheckBox'
import TextField from '@uiComponents/FormFields/TextField'

const MultipleSelectionField = ({
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
  const countFieldName = `${fieldName}[${index}]`

  const { control } = useFormContext()

  const { field } = useController({
    name: countFieldName,
    control,
    defaultValue: { fieldName: '', value: false },
  })
  const { onChange } = field

  const onCheckboxClick = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      value: event.target.checked,
      fieldName: fieldId,
      ...(field?.value?.other ? { other: field.value?.other } : {}),
    })
  }

  const onOtherChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange({
      fieldName: FormValues.OTHER,
      value: field?.value?.value ?? false,
      other: event.target.value,
    })
  }

  return (
    <div className="radius relative w-full rounded bg-primary p-5 ">
      <div className="grid grid-cols-3 content-between items-center gap-x-2 gap-y-2">
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
        <div className="flex justify-end">
          <Checkbox
            fieldName={`${fieldName}[${index}].value`}
            onChange={onCheckboxClick}
          />
        </div>
      </div>
    </div>
  )
}

export default MultipleSelectionField
