import React, { useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import TextField from '@uiComponents/FormFields/TextField'
import { createAboutUsValidationSchema } from '@validation/aboutUs/aboutUs'
import Image from 'next/image'

import { useImageUpload } from '../../../hooks/ImageUpload'

export interface IAboutUsMemberProps {
  setShowPersonForm: (value: boolean) => void
}

const defaultValues = {
  header: '',
  paragraph: '',
  imageDescription: '',
  imageURL: null,
}
const AboutUsMember = ({ setShowPersonForm }: IAboutUsMemberProps) => {
  const { imageLoaded, handleFileChange } = useImageUpload()

  const { isTeamMemberSubmitSuccess } = useAppSelector(aboutUsSelector.aboutUs)

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

  const { handleSubmit, reset } = methods

  const onSubmit = (data: ICreateTeamMember) => {
    dispatch(aboutUsMiddleware.createTeamMember(data))
  }

  useEffect(() => {
    if (isTeamMemberSubmitSuccess) {
      dispatch(aboutUsMiddleware.resetCreateTeamMemberSubmitSuccess())
      setShowPersonForm(false)
      reset(defaultValues)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTeamMemberSubmitSuccess])

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
                    className="h-[345px] w-[500px]"
                  />
                ) : null}
              </div>
              <div
                className={`${
                  imageLoaded !== undefined ? 'flex flex-col-reverse' : 'flex w-full justify-center'
                }`}
              >
                <FileField
                  fieldName="imageURL"
                  inputRef={inputRef}
                  type="file"
                  handleFileChange={handleFileChange}
                />
                <div className="flex w-full items-center justify-center">
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
            </div>

            <div className="mt-10 space-y-4 xl:mt-0 xl:w-[40%]">
              <div className="w-full space-y-2">
                <TextField
                  fieldName="header"
                  label={t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_HEADER) as string}
                  id={t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_HEADER) as string}
                />
              </div>
              <div className="w-full space-y-2">
                <TextField
                  label={t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_PARAGRAPH) as string}
                  id={t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_PARAGRAPH) as string}
                  fieldName="paragraph"
                  rows={7}
                />
              </div>
              <div>
                <TextField
                  fieldName="imageDescription"
                  label={t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_DESCRIPTION) as string}
                  id={t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER_DESCRIPTION) as string}
                />
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

export default AboutUsMember
