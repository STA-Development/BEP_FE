import React from 'react'
import Image from 'next/image'

interface IImageProps {
  image?: string
}
export const NewsImage = ({ image }: IImageProps) => (
  <div>
    {image ? (
      <Image
        src={image ?? ''}
        loader={({ src }) => `${src}`}
        width={500}
        height={400}
        alt="picture"
        className="h-[400px] w-[500px] object-cover"
      />
    ) : null}
  </div>
)
