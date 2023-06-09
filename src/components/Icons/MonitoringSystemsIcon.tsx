import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const MonitoringSystemsIcon: FC<IconProps> = ({
  fill = 'fill-primary',
  className,
  ...rest
}) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M8.5 5.73047C8.5 4.48783 9.50736 3.48047 10.75 3.48047H13.25C14.4926 3.48047 15.5 4.48783 15.5 5.73047V7.50047H18.75C19.9926 7.50047 21 8.50782 21 9.75047V20.7505C21 21.1647 20.6642 21.5005 20.25 21.5005H3.75C3.33579 21.5005 3 21.1647 3 20.7505V12.7505C3 11.5078 4.00736 10.5005 5.25 10.5005H8.5V5.73047ZM10 20.0005H14V5.73047C14 5.31626 13.6642 4.98047 13.25 4.98047H10.75C10.3358 4.98047 10 5.31625 10 5.73047V20.0005ZM8.5 12.0005H5.25C4.83579 12.0005 4.5 12.3363 4.5 12.7505V20.0005H8.5V12.0005ZM15.5 20.0005H19.5V9.75047C19.5 9.33625 19.1642 9.00047 18.75 9.00047H15.5V20.0005Z" />
    </svg>
  )
}
