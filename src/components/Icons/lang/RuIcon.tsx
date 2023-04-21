import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const RuIcon: FC<IconProps> = ({ fill = 'fill-black', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <g clipPath="url(#clip0_1243_59754)">
        <rect
          width="24"
          height="17"
          rx="3"
          fill="#1A47B8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.3333H24V17H0V11.3333Z"
          fill="#F93939"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H24V5.66667H0V0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1243_59754">
          <rect
            width="24"
            height="17"
            rx="3"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
