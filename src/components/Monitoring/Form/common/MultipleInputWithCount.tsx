import React from 'react'
import { useTranslation } from 'react-i18next'
import { MinusIcon } from '@components/Icons/MinusIcon'
import { Translation } from '@constants/translations'
import TextField from '@uiComponents/FormFields/TextField'

const MultipleInputWithCount = ({
  fieldName,
  index,
  placeholder,
  onRemoveField,
  isMinusButtonVisible,
}: {
  fieldName: string
  index: number
  placeholder: string
  onRemoveField: (value: number) => void
  isMinusButtonVisible: boolean
}) => {
  const [t] = useTranslation()

  return (
    <div className=" radius relative rounded bg-primary pb-4 pl-4 pr-6 pt-6 ">
      <div className="absolute right-2 top-2 cursor-pointer">
        {isMinusButtonVisible ? (
          <MinusIcon
            onClick={() => onRemoveField(index)}
            fill="fill-white"
          />
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-2">
        <div className="col-span-2">
          <TextField
            fieldName={`${fieldName}[${index}].value`}
            placeholder={placeholder}
          />
        </div>
        <div>
          <TextField
            placeholder={t(Translation.PAGE_MONITORING_SYSTEM_FORM_PLACEHOLDER_COUNT) as string}
            fieldName={`${fieldName}[${index}].count`}
          />
        </div>
      </div>
    </div>
  )
}

export default MultipleInputWithCount
