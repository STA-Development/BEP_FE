import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const AddIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M18 3c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C3 9.716 9.716 3 18 3Zm0 2.25C10.958 5.25 5.25 10.958 5.25 18S10.958 30.75 18 30.75 30.75 25.042 30.75 18 25.042 5.25 18 5.25Zm0 5.25c.621 0 1.125.504 1.125 1.125v5.25h5.25a1.125 1.125 0 0 1 0 2.25h-5.25v5.25a1.125 1.125 0 0 1-2.25 0v-5.25h-5.25a1.125 1.125 0 0 1 0-2.25h5.25v-5.25c0-.621.504-1.125 1.125-1.125Z" />
    </svg>
  )
}
