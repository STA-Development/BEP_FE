import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const SearchIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M8 0.25C12.0041 0.25 15.25 3.49594 15.25 7.5C15.25 9.2319 14.6427 10.8219 13.6295 12.0688L18.5303 16.9697C18.8232 17.2626 18.8232 17.7374 18.5303 18.0303C18.2641 18.2966 17.8474 18.3208 17.5538 18.1029L17.4697 18.0303L12.5688 13.1295C11.3219 14.1427 9.7319 14.75 8 14.75C3.99594 14.75 0.75 11.5041 0.75 7.5C0.75 3.49594 3.99594 0.25 8 0.25ZM8 1.75C4.82436 1.75 2.25 4.32436 2.25 7.5C2.25 10.6756 4.82436 13.25 8 13.25C11.1756 13.25 13.75 10.6756 13.75 7.5C13.75 4.32436 11.1756 1.75 8 1.75Z" />
    </svg>
  )
}
