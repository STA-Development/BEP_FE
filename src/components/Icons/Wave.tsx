import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const Wave: FC<IconProps> = ({ fill = 'fill-gray-wave', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      viewBox="0 0 1440 213"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0L60 7.88889C120 15.7778 240 31.5556 360 63.1111C480 94.6667 600 142 720 153.833C840 165.667 960 142 1080 114.389C1200 86.7778 1320 55.2222 1380 39.4444L1440 23.6667V213H1380C1320 213 1200 213 1080 213C960 213 840 213 720 213C600 213 480 213 360 213C240 213 120 213 60 213H0V0Z"
      />
    </svg>
  )
}
