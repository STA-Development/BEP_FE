import React from 'react'
import { useTranslation } from 'react-i18next'
import { IImageLoader } from '@allTypes/reduxTypes/edInstitutesStateTypes'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

export interface IMultipleImageLoaderProps {
  imageLoaded: IImageLoader[]
  onRemove: (index: number) => void
  length: number
}

const MultipleImageLoader = ({ imageLoaded, onRemove, length }: IMultipleImageLoaderProps) => {
  const [t] = useTranslation()

  return (
    <div className="grid w-full gap-4 xl:grid-cols-4">
      {imageLoaded?.map((image, index) => (
        <div className="p-4">
          <Image
            src={image as string}
            alt="image"
            loader={() => (image as string) ?? ''}
            width={300}
            height={300}
            className="mb-2 h-[300px] w-[300px] object-cover"
          />
          {length ? (
            <Button onClick={() => onRemove(index)}>
              {t(Translation.PAGE_EDUCATIONAL_CREATE_DELETE_IMAGE)}
            </Button>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default MultipleImageLoader
