import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const SearchIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
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
        d="M10 3.25C14.0041 3.25 17.25 6.49594 17.25 10.5C17.25 12.2319 16.6427 13.8219 15.6295 15.0688L20.5303 19.9697C20.8232 20.2626 20.8232 20.7374 20.5303 21.0303C20.2641 21.2966 19.8474 21.3208 19.5538 21.1029L19.4697 21.0303L14.5688 16.1295C13.3219 17.1427 11.7319 17.75 10 17.75C5.99594 17.75 2.75 14.5041 2.75 10.5C2.75 6.49594 5.99594 3.25 10 3.25ZM10 4.75C6.82436 4.75 4.25 7.32436 4.25 10.5C4.25 13.6756 6.82436 16.25 10 16.25C13.1756 16.25 15.75 13.6756 15.75 10.5C15.75 7.32436 13.1756 4.75 10 4.75Z"
        fill="white"
      />
    </svg>
  )
}
