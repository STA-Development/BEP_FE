import React, { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch } from '@redux/hooks'
import { aboutUsMiddleware } from '@redux/slices/aboutUs'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import TextField from '@uiComponents/FormFields/TextField'
import { createAboutUsValidationSchema } from '@validation/aboutUs/aboutUs'
import Image from 'next/image'

import { useImageUpload } from '../../hooks/ImageUpload'

const defaultValues = {
  header: '',
  paragraph: '',
  imageDescription: '',
  imageURL: null,
}
const AboutUsAddMember = () => {
  const { imageLoaded, handleFileChange } = useImageUpload()

  const inputRef = useRef<HTMLInputElement>(null)

  const [t] = useTranslation()

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createAboutUsValidationSchema),
    mode: 'onChange',
  })

  const { handleSubmit } = methods

  const onSubmit = (data: ICreateTeamMember) => {
    dispatch(aboutUsMiddleware.createTeamMember(data))
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <div className="mb-10 flex w-full flex-col justify-between xl:flex-row-reverse">
            <div className="space-y-4">
              <div>
                {imageLoaded ? (
                  <Image
                    src={imageLoaded}
                    loader={() => imageLoaded}
                    width={500}
                    height={680}
                    alt="picture"
                  />
                ) : null}
              </div>
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
                  {t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_UPLOAD_IMAGE)}
                </Button>
              </div>
            </div>

            <div className="mt-10 space-y-4 xl:mt-0 xl:w-[40%]">
              <div className="w-full space-y-2">
                <p>{t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_HEADER)}</p>
                <TextField fieldName="header" />
              </div>
              <div className="w-full space-y-2">
                <p>{t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_PARAGRAPH)}</p>
                <TextField
                  fieldName="paragraph"
                  rows={7}
                />
              </div>
              <div>
                <p>{t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_DESCRIPTION)}</p>
                <TextField fieldName="imageDescription" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              size="bs"
              type="submit"
            >
              {t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_SUBMIT)}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default AboutUsAddMember
