import { ReactNode } from 'react'

export type ContentProps = {
  img: ReactNode
  title: string
  desc: string
  button?: ReactNode
}

export const Content = ({ img, title, desc, button }: ContentProps) => {
  return (
    <div className="grid grid-cols-1 py-20 xl:grid-cols-3 xl:pt-25">
      <div className="col-span-2">
        <h2 className="mb-2.5 text-xl font-medium xl:mb-5 xl:text-2xl">{title}</h2>
        <p className="mb-10 text-base text-black-light xl:text-lg">{desc}</p>
        {button}
      </div>
      <div className="order-first mb-10 flex justify-center xl:order-last">{img}</div>
    </div>
  )
}
