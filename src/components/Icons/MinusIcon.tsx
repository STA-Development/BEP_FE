import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const MinusIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      height="20px"
      width="20px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310.285 310.285"
      xmlSpace="preserve"
      className={style}
      {...rest}
    >
      <path
        fill={fill}
        d="M155.143,0.001C69.597,0.001,0,69.597,0,155.143c0,85.545,69.597,155.142,155.143,155.142s155.143-69.597,155.143-155.142
	C310.285,69.597,240.689,0.001,155.143,0.001z M244.143,171.498c0,4.411-3.589,8-8,8h-163c-4.411,0-8-3.589-8-8v-32
	c0-4.411,3.589-8,8-8h163c4.411,0,8,3.589,8,8V171.498z"
      />
    </svg>
  )
}
