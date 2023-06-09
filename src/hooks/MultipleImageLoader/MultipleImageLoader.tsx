import React, { useState } from 'react'
import { IImageLoader } from '@pages/educational-institutes/create-institute'

export const useMultipleImageUpload = () => {
  const [imageLoaded, setImageLoaded] = useState<IImageLoader[]>([])

  const changeMultipleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file as File)
      )

      setImageLoaded((prevImages: IImageLoader[]) => prevImages.concat(imageArray))
    }
  }

  return {
    imageLoaded,
    setImageLoaded,
    changeMultipleFiles,
  }
}
