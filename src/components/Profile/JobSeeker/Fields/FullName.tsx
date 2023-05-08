import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { IJobSeekerProfileForm, resetValues } from '@components/Profile/JobSeeker/helper'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'
import { useTranslation } from 'next-i18next'

export const FullName = () => {
  const [t] = useTranslation()
  const fieldName = 'name'
  const { control, getValues, reset } = useFormContext()
  const { field } = useController({ name: fieldName, control })
  const { value } = field

  const onActiveChange = () => {
    reset({
      ...resetValues(getValues() as IJobSeekerProfileForm),
      name: { ...getValues().name, active: !value.active },
    })
  }

  return (
    <tr>
      <td className="block px-0 pb-2.5 pt-5 align-top xl:table-cell xl:w-[20%] xl:py-10">
        <label
          htmlFor=""
          className="text-sm text-black-light"
        >
          {t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_NAME)}
        </label>
      </td>
      <td className="block p-0 xl:table-cell xl:py-10 xl:pr-10">
        {value.active ? (
          <TextField
            type="text"
            fieldName={`${fieldName}.value`}
            className="w-full rounded border border-gray-light px-5 py-2.5 text-base text-black outline-0"
          />
        ) : (
          <div className="h-[50px] w-full rounded border border-gray-light px-5 py-2.5 outline-0">
            {field.value.value}
          </div>
        )}
      </td>
      <td className="block w-1 w-full p-0 py-5 xl:table-cell xl:w-48 xl:py-10">
        {!value.active ? (
          <Button
            variant="outlined"
            size="fl"
            type="button"
            onClick={onActiveChange}
          >
            {t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_NAME_ACTIONS)}
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="fl"
            type="submit"
          >
            Save
          </Button>
        )}
      </td>
    </tr>
  )
}
