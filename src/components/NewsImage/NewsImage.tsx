import React from 'react'
import Image from 'next/image'

interface IImageProps {
  image?: string
}
export const NewsImage = ({ image }: IImageProps) => (
  <div>
    {image ? (
      <Image
        src={image}
        loader={({ src }) => `${src}`}
        width={500}
        height={680}
        alt="picture"
      />
    ) : null}
  </div>
)
