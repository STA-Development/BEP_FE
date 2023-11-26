import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ImageLoader } from '@allTypes/reduxTypes/edInstitutesStateTypes'
import { NewsType } from '@axios/news/newsManagerTypes'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { educationalInstitutesSelector } from '@redux/slices/educational-instutions'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'
import TextField from '@uiComponents/FormFields/TextField'

import { useCreateObjectFromArray, useCreateObjectFromEnum } from '@hooks/EducationalInstitution'

interface IEducationalInstitutesFormProps {
  imageLoaded: ImageLoader
  changeMultipleFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const EducationalInstitutesForm = ({
  imageLoaded,
  changeMultipleFiles,
}: IEducationalInstitutesFormProps) => {
  const [t] = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)

  const provinces = useAppSelector(educationalInstitutesSelector.provinces)

  const { objectFromArrayFields } = useCreateObjectFromArray(provinces)

  const { objectFromEnumFields } = useCreateObjectFromEnum(NewsType)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div className="flex w-full  flex-col  items-center justify-center gap-4">
      <div className="flex w-full flex-col-reverse items-center justify-center">
        <FileField
          fieldName="imageURLs"
          inputRef={inputRef}
          type="file"
          handleFileChange={changeMultipleFiles}
          multiple
          limit={4}
          scrollError
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
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_NAME) as string}
        />
        <TextField
          fieldName="address"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_ADDRESS) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_ADDRESS) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_ADDRESS) as string}
        />
        <TextField
          fieldName="phone"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_PHONE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_PHONE) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_PHONE) as string}
        />
        <TextField
          fieldName="email"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_EMAIL) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_EMAIL) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_EMAIL) as string}
        />

        <AutocompleteField
          items={objectFromEnumFields}
          fieldName="type"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_TYPE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_TYPE) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_TYPE) as string}
          scrollError
        />
        <AutocompleteField
          items={objectFromArrayFields}
          fieldName="province"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_PROVINCE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_PROVINCE) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_PROVINCE) as string}
          scrollError
        />
        <TextField
          fieldName="subtitle"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_SUBTITLE) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_SUBTITLE) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_SUBTITLE) as string}
        />
        <TextField
          fieldName="rector"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_RECTOR) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_RECTOR) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_RECTOR) as string}
        />
        <TextField
          fieldName="studentQuantity"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_STUDENT_QUANTITY) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_STUDENT_QUANTITY) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_STUDENT_QUANTITY) as string}
        />
        <TextField
          fieldName="lecturerQuantity"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_LECTURER_QUANTITY) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_LECTURER_QUANTITY) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_LECTURER_QUANTITY) as string}
        />
        <div className="flex w-full flex-col justify-between xl:flex-row">
          <TextField
            fieldName="startTime"
            label={t(Translation.PAGE_EDUCATIONAL_CREATE_START_TIME) as string}
            id={t(Translation.PAGE_EDUCATIONAL_CREATE_START_TIME) as string}
            placeholder="00:00"
          />
          <TextField
            fieldName="endTime"
            label={t(Translation.PAGE_EDUCATIONAL_CREATE_END_TIME) as string}
            id={t(Translation.PAGE_EDUCATIONAL_CREATE_END_TIME) as string}
            placeholder="00:00"
          />
        </div>

        <TextField
          fieldName="description"
          label={t(Translation.PAGE_EDUCATIONAL_CREATE_DESCRIPTION) as string}
          id={t(Translation.PAGE_EDUCATIONAL_CREATE_DESCRIPTION) as string}
          placeholder={t(Translation.PAGE_EDUCATIONAL_CREATE_DESCRIPTION) as string}
        />
      </div>
      <Button type="submit">{t(Translation.PAGE_EDUCATIONAL_CREATE_SUBMIT)}</Button>
    </div>
  )
}
