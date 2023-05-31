import React, { useRef } from 'react'
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IFormData } from '@allTypes/reduxTypes/newsStateTypes'
import { IIndividualNewsResponse } from '@axios/news/newsManagerTypes'
import { NewsImage } from '@components/NewsImage'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import TextField from '@uiComponents/FormFields/TextField'

import { useImageUpload } from '../../hooks/ImageUpload'

interface IChangeEventsNewsForm {
  onSubmit: SubmitHandler<IFormData>
  individualNews?: IIndividualNewsResponse
  methods: UseFormReturn<IFormData>
}

export const CustomHookForm: React.FC<IChangeEventsNewsForm> = ({
  onSubmit,
  individualNews,
  methods,
}) => {
  const [t] = useTranslation()

  const inputRef = useRef<HTMLInputElement>(null)

  const { imageLoaded, handleFileChange } = useImageUpload()

  const { handleSubmit } = methods
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div className="mt-10 flex w-full flex-row-reverse justify-between">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <div className="mb-10 flex w-full flex-col justify-between xl:flex-row-reverse">
            <div className="space-y-4">
              <NewsImage image={imageLoaded ?? (individualNews?.imageURL as string)} />
              <div className="flex w-full justify-center">
                <FileField
                  fieldName="imageURL"
                  inputRef={inputRef}
                  type="file"
                  handleFileChange={handleFileChange}
                />
                <Button
                  size="bs"
                  variant="outlined"
                  type="button"
                  onClick={handleClick}
                >
                  {t(Translation.PAGE_NEWS_UPLOAD_IMAGE)}
                </Button>
              </div>
            </div>

            <div className="mt-10 space-y-4 xl:mt-0 xl:w-[40%]">
              <TextField
                fieldName="header"
                label={t(Translation.PAGE_NEWS_HEADER) as string}
                id={t(Translation.PAGE_NEWS_HEADER) as string}
              />
              <TextField
                fieldName="paragraph"
                label={t(Translation.PAGE_NEWS_PARAGRAPH) as string}
                id={t(Translation.PAGE_NEWS_PARAGRAPH) as string}
                rows={7}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              size="bs"
              type="submit"
            >
              {t(Translation.PAGE_NEWS_SUBMIT)}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
