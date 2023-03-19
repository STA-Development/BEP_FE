import { PropsWithChildren } from 'react'
import Image from 'next/image'

export type ContentProps = PropsWithChildren & {
  img: string
}

export const Content = ({ img, children }: ContentProps) => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-30 py-10 md:py-30">
        <div className="col-span-2">{children}</div>
        <div className="md:order-last order-first flex justify-center mb-10">
          <Image
            src={img}
            alt="Picture of the author"
            className="w-auto"
          />
        </div>
      </div>
    </div>
  )
}
