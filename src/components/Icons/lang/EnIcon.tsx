import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const EnIcon: FC<IconProps> = ({ fill = 'fill-[#212121]', className, ...rest }) => {
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
      <g clipPath="url(#clip0_1243_59701)">
        <rect
          width="24"
          height="17"
          rx="3"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H10.2857V7.93333H0V0Z"
          fill="#1A47B8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2857 0V1.13333H24V0H10.2857ZM10.2857 2.26667V3.4H24V2.26667H10.2857ZM10.2857 4.53333V5.66667H24V4.53333H10.2857ZM10.2857 6.8V7.93333H24V6.8H10.2857ZM0 9.06667V10.2H24V9.06667H0ZM0 11.3333V12.4667H24V11.3333H0ZM0 13.6V14.7333H24V13.6H0ZM0 15.8667V17H24V15.8667H0Z"
          fill="#F93939"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.14258 1.13333V2.26666H2.28544V1.13333H1.14258ZM3.42829 1.13333V2.26666H4.57115V1.13333H3.42829ZM5.71401 1.13333V2.26666H6.85686V1.13333H5.71401ZM7.99972 1.13333V2.26666H9.14258V1.13333H7.99972ZM6.85686 2.26666V3.4H7.99972V2.26666H6.85686ZM4.57115 2.26666V3.4H5.71401V2.26666H4.57115ZM2.28544 2.26666V3.4H3.42829V2.26666H2.28544ZM1.14258 3.4V4.53333H2.28544V3.4H1.14258ZM3.42829 3.4V4.53333H4.57115V3.4H3.42829ZM5.71401 3.4V4.53333H6.85686V3.4H5.71401ZM7.99972 3.4V4.53333H9.14258V3.4H7.99972ZM1.14258 5.66667V6.8H2.28544V5.66667H1.14258ZM3.42829 5.66667V6.8H4.57115V5.66667H3.42829ZM5.71401 5.66667V6.8H6.85686V5.66667H5.71401ZM7.99972 5.66667V6.8H9.14258V5.66667H7.99972ZM6.85686 4.53333V5.66667H7.99972V4.53333H6.85686ZM4.57115 4.53333V5.66667H5.71401V4.53333H4.57115ZM2.28544 4.53333V5.66667H3.42829V4.53333H2.28544Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1243_59701">
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
