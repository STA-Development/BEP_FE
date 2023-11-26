import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import TextField from '@uiComponents/FormFields/TextField'
import Image from 'next/image'

import { useImageUpload } from '@hooks/ImageUpload'

interface IAboutUsFormProps {
  imageURL?: string
}

export const AboutUsForm = ({ imageURL }: IAboutUsFormProps) => {
  const { imageLoaded, handleFileChange } = useImageUpload()

  const image = imageLoaded ?? imageURL

  const inputRef = useRef<HTMLInputElement>(null)

  const [t] = useTranslation()

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div>
      <div className="mb-10 flex w-full flex-col justify-between xl:flex-row-reverse">
        <div className="space-y-4">
          <div>
            {image ? (
              <Image
                src={image ?? ''}
                loader={({ src }) => `${src}`}
                width={500}
                height={345}
                alt="picture"
                className="h-[345px] w-[500px] object-contain"
              />
            ) : null}
          </div>
          <div
            className={`${
              !imageLoaded ? 'flex flex-col-reverse text-blue-500' : 'flex w-full justify-center'
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
    </div>
  )
}
