import React, { ComponentPropsWithoutRef } from 'react'
import clsxMerge from '@lib/clsxm'

const ContainerColor = ['primary', 'secondary', 'white', 'wave'] as const

export interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  color?: (typeof ContainerColor)[number]
}

export const Container = ({ color, className, children }: IContainerProps) => {
  const style = clsxMerge([
    [color === 'wave' && 'bg-gray-wave'],
    [color === 'primary' && 'bg-primary'],
    [color === 'white' && 'bg-white'],
    [color === 'secondary' && 'bg-gray-thin'],
    className,
  ])

  return (
    <div className={style}>
      <div className="container">{children}</div>
    </div>
  )
}
