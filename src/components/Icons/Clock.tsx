import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const Clock: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
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
      <path d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10 1.667C5.405 1.667 1.667 5.405 1.667 10C1.667 14.595 5.405 18.333 10 18.333C14.595 18.333 18.333 14.595 18.333 10C18.333 5.405 14.595 1.667 10 1.667ZM9.25 4C9.6295 4 9.9435 4.28233 9.9931 4.64827L10 4.75V10H13.25C13.664 10 14 10.336 14 10.75C14 11.1295 13.7177 11.4435 13.3517 11.4931L13.25 11.5H9.25C8.8705 11.5 8.5565 11.2177 8.5069 10.8517L8.5 10.75V4.75C8.5 4.336 8.836 4 9.25 4Z" />
    </svg>
  )
}
