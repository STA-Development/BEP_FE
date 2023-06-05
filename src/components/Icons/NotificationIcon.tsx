import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const NotificationIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="19"
      height="21"
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <path
        d="M6.04173 17.503H11.9583C11.7196 18.9211 10.486 20.0015 9 20.0015C7.514 20.0015 6.28037 18.9211 6.04173 17.503ZM9 0.503906C13.1421 0.503906 16.5 3.86177 16.5 8.00391V12.0024L17.9183 15.1625C17.9732 15.2848 18.0016 15.4174 18.0016 15.5515C18.0016 16.0762 17.5763 16.5015 17.0516 16.5015H0.95219C0.8184 16.5015 0.68613 16.4733 0.56402 16.4186C0.0851497 16.2042 -0.12927 15.6422 0.0851098 15.1633L1.50001 12.0028L1.50011 7.99099L1.50453 7.74107C1.6436 3.71035 4.95588 0.503906 9 0.503906Z"
        fill="#326789"
      />
    </svg>
  )
}
