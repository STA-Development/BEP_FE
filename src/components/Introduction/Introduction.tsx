import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '@components/Container'

const ContentColor = ['primary', 'secondary', 'wave'] as const

interface IIntroductionProps extends ComponentPropsWithoutRef<'div'> {
  wave?: boolean
  img?: ReactNode
  title: string
  desc: string
  button?: ReactNode
  color?: (typeof ContentColor)[number]
}

export const Introduction = ({
  wave = false,
  color,
  className,
  img,
  title,
  desc,
  button,
}: IIntroductionProps) => (
  <>
    {wave ? (
      <div className="h-[213px] w-full bg-[url('/vawe.svg')] bg-cover bg-center bg-no-repeat" />
    ) : null}
    <Container
      color={color}
      className={className}
    >
      <div className={`flex flex-col gap-0 py-20 xl:flex-row xl:gap-20 ${wave && 'xl:pt-0'}`}>
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
  </>
)
