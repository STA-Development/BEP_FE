import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '@components/Container'

const ContentColor = ['primary', 'secondary'] as const

export interface IContentProps extends ComponentPropsWithoutRef<'div'> {
  img: ReactNode
  title: string
  desc: string
  button?: ReactNode
  color?: (typeof ContentColor)[number]
}

export const Content = ({ color, className, img, title, desc, button }: IContentProps) => (
  <Container
    color={color}
    className={className}
  >
    <div className="flex flex-col gap-0 py-20 xl:flex-row xl:gap-20 xl:pt-25">
      <div className="col-span-2">
        <h2 className="mb-2.5 text-xl font-medium xl:mb-5 xl:text-2xl">{title}</h2>
        <p className="mb-10 text-base text-black-light">{desc}</p>
        {button}
      </div>
      <div className="order-first mb-10 flex justify-center xl:order-last xl:mb-0 xl:justify-end">
        {img}
      </div>
    </div>
  </Container>
)
