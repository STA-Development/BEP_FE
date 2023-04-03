import React, { ComponentPropsWithoutRef } from 'react'
import clsxMerge from '@lib/clsxm'

const ContainerColor = ['primary', 'secondary'] as const

export interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  color?: (typeof ContainerColor)[number]
}

export const Container = ({ color, className, children }: IContainerProps) => {
  const style = clsxMerge([
    [color === 'primary' && 'bg-primary'],
    [color === 'secondary' && 'bg-gray-thin'],
    className,
  ])

  return (
    <div className={style}>
      <div className="container">{children}</div>
    </div>
  )
}
