import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const RightIcon: FC<IconProps> = ({ fill = 'fill-white', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="15"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM40.7071 8.20711C41.0976 7.81658 41.0976 7.18342 40.7071 6.79289L34.3431 0.428932C33.9526 0.0384078 33.3195 0.0384078 32.9289 0.428932C32.5384 0.819457 32.5384 1.45262 32.9289 1.84315L38.5858 7.5L32.9289 13.1569C32.5384 13.5474 32.5384 14.1805 32.9289 14.5711C33.3195 14.9616 33.9526 14.9616 34.3431 14.5711L40.7071 8.20711ZM1 8.5H40V6.5H1V8.5Z" />
    </svg>
  )
}
