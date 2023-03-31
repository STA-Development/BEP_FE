import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '@components/Container'
import { Dialog } from '@headlessui/react'

const ContentColor = ['primary', 'secondary'] as const

export interface IIntroductionProps extends ComponentPropsWithoutRef<'div'> {
  img: ReactNode
  title: string
  desc: string
  button?: ReactNode
  color?: (typeof ContentColor)[number]
}

export const Introduction = ({
  color,
  className,
  img,
  title,
  desc,
  button,
}: IIntroductionProps) => (
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
