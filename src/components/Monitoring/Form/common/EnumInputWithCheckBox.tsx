import React, { ChangeEvent } from 'react'
import { useController, useFieldArray, useFormContext } from 'react-hook-form'
import { FormValues } from '@components/Monitoring/Form/helper'
import Checkbox from '@uiComponents/FormFields/CheckBox'
import TextField from '@uiComponents/FormFields/TextField'

const EnumInputWithCheckBox = ({
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
  const checkBoxFieldName = `${fieldName}[${index}]`

  interface ICheckBoxFields {
    value: string
    fieldName: string
  }

  const { control, setValue } = useFormContext()

  const { field } = useController({ name: checkBoxFieldName, control })
  const { fields }: { fields: ICheckBoxFields[] } = useFieldArray({ name: fieldName, control })
  const { onChange } = field

  const onCheck = async (event: ChangeEvent<HTMLInputElement>) => {
    const unCheckedFields = fields.map((item: ICheckBoxFields) => {
      if (item.fieldName === fieldId && event.target.checked) {
        return {
          ...item,
          value: true,
        }
      }

      return {
        ...item,
        value: false,
      }
    })

    setValue(fieldName, unCheckedFields)
  }

  const onOtherChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange({
      value: field?.value?.count ?? 0,
      fieldName: FormValues.OTHER,
      other: event.target.value,
    })
  }

  return (
    <div className="radius relative w-full rounded bg-primary pb-4 pl-4 pr-6 pt-6 ">
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
          <Checkbox
            fieldName={`${fieldName}[${index}].value`}
            onChange={onCheck}
            className="justify-end"
          />
        </div>
      </div>
    </div>
  )
}

export default EnumInputWithCheckBox
