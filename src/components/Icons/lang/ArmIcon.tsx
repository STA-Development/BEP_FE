import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const ArmIcon: FC<IconProps> = ({ fill = 'fill-black', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <g clipPath="url(#clip0_1243_59757)">
        <path
          d="M21.7143 0H2.28571C1.02335 0 0 1.01482 0 2.26667V14.7333C0 15.9852 1.02335 17 2.28571 17H21.7143C22.9767 17 24 15.9852 24 14.7333V2.26667C24 1.01482 22.9767 0 21.7143 0Z"
          fill="#1A47B8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.3333H24V17H0V11.3333Z"
          fill="#FFDA2C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H24V5.66667H0V0Z"
          fill="#F93939"
        />
      </g>
      <defs>
        <clipPath id="clip0_1243_59757">
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
