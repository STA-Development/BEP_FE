import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { EducationalInstitutionTypes, province } from '@constants/applications'
import { Translation } from '@constants/translations'
import { IImageLoader } from '@pages/educational-institutes/create-institute'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'
import TextField from '@uiComponents/FormFields/TextField'

interface IEducationalInstitutesFormProps {
  imageLoaded: IImageLoader[]
  changeMultipleFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const EducationalInstitutesForm = ({
  imageLoaded,
  changeMultipleFiles,
}: IEducationalInstitutesFormProps) => {
  const [t] = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div className="flex w-full  flex-col  items-center justify-center gap-4">
      <div className="flex w-full justify-center">
        <FileField
          fieldName="imageURL"
          inputRef={inputRef}
          type="file"
          handleFileChange={changeMultipleFiles}
          multiple
        />
        <Button
          disabled={imageLoaded.length >= 4}
          size="bs"
          variant="outlined"
          type="button"
          onClick={handleClick}
        >
          {t(Translation.PAGE_EDUCATIONAL_CREATE_ADD_IMAGE)}
        </Button>
      </div>
      <div className="w-full max-w-[400px] space-y-3">
        <TextField
          fieldName="name"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_NAME) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_NAME) as string}
        />
        <TextField
          fieldName="address"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_ADDRESS) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_ADDRESS) as string}
        />
        <TextField
          fieldName="phone"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_PHONE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_PHONE) as string}
          type="number"
        />
        <TextField
          fieldName="email"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_EMAIL) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_EMAIL) as string}
        />

        <AutocompleteField
          items={EducationalInstitutionTypes}
          fieldName="type"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_TYPE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_TYPE) as string}
        />
        <AutocompleteField
          items={province}
          fieldName="province"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_PROVINCE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_PROVINCE) as string}
        />
        <TextField
          fieldName="subtitle"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_SUBTITLE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_SUBTITLE) as string}
        />
        <TextField
          fieldName="rector"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_RECTOR) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_RECTOR) as string}
        />
        <TextField
          fieldName="studentQuantity"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_STUDENT_QUANTITY) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_STUDENT_QUANTITY) as string}
          type="number"
        />
        <TextField
          fieldName="lecturerQuantity"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_LECTURER_QUANTITY) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_LECTURER_QUANTITY) as string}
          type="number"
        />
        <div className="flex w-full flex-col justify-between xl:flex-row">
          <TextField
            fieldName="startTime"
            label={t(Translation.PAGE_EDUCATIONAL_CREATE_START_TIME) as string}
            id={t(Translation.PAGE_EDUCATIONAL_CREATE_START_TIME) as string}
          />
          <TextField
            fieldName="endTime"
            label={t(Translation.PAGE_EDUCATIONAL_CREATE_END_TIME) as string}
            id={t(Translation.PAGE_EDUCATIONAL_CREATE_END_TIME) as string}
          />
        </div>

        <TextField
          fieldName="description"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_DESCRIPTION) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_DESCRIPTION) as string}
        />
      </div>
      <Button type="submit">{t(Translation.PAGE_EDUCATIONAL_CREATE_SUBMIT)}</Button>
    </div>
  )
}