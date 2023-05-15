import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  area,
  educationLevel,
  expectedSalary,
  experience,
  schedule,
  type,
  workplace,
} from '@constants/applications'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'

interface IAreaOfSpecialization {
  setSelectedIndex: (prev: (prev: number) => number) => void
}

export const AreaOfSpecialization = ({ setSelectedIndex }: IAreaOfSpecialization) => {
  const [t] = useTranslation()

  const handleClick = () => {
    setSelectedIndex((prev: number) => (prev > 1 ? 1 : prev) + 1)
  }

  return (
    <div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={type}
          fieldName="type"
        />
      </div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={area}
          fieldName="area"
        />
      </div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={educationLevel}
          fieldName="educationLevel"
        />
      </div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={experience}
          fieldName="experience"
        />
      </div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={schedule}
          fieldName="schedule"
        />
      </div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={workplace}
          fieldName="workplace"
        />
      </div>
      <div className="mb-5 w-full">
        <AutocompleteField
          items={expectedSalary}
          fieldName="expectedSalary"
        />
      </div>
      <div>
        <Button
          size="fl"
          type="button"
          onClick={handleClick}
        >
          {t(Translation.PAGE_FILL_THE_FORM_ACTIONS_NEXT)}
        </Button>
      </div>
    </div>
  )
}
