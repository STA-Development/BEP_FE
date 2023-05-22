import React, { useState } from 'react'

export const useImageUpload = () => {
  const [imageLoaded, setImageLoaded] = useState<string>()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0]

    if (fileObj) {
      const objectUrl = URL.createObjectURL(fileObj)

      setImageLoaded(objectUrl)
    }
  }

  return {
    imageLoaded,
    handleFileChange,
  }
}
