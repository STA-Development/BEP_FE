import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const DownIcon: FC<IconProps> = ({ fill = 'fill-[#212121]', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <path
        d="M4.21967 8.96967C4.51256 8.67678 4.98744 8.67678 5.28033 8.96967L12 15.6893L18.7197 8.96967C19.0126 8.67678 19.4874 8.67678 19.7803 8.96967C20.0732 9.26256 20.0732 9.73744 19.7803 10.0303L12.5303 17.2803C12.2374 17.5732 11.7626 17.5732 11.4697 17.2803L4.21967 10.0303C3.92678 9.73744 3.92678 9.26256 4.21967 8.96967Z"
        fill="white"
      />
    </svg>
  )
}
