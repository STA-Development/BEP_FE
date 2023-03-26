import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const YTIcon: FC<IconProps> = ({ fill = 'fill-[#FF0000]', className, ...rest }) => {
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
      <path d="M23.5057 6.22941C23.2289 5.20141 22.4184 4.39087 21.3904 4.1141C19.5123 3.6001 11.9999 3.6001 11.9999 3.6001C11.9999 3.6001 4.48762 3.6001 2.60954 4.09433C1.60131 4.3711 0.771002 5.20141 0.494232 6.22941C0 8.10749 0 12.002 0 12.002C0 12.002 0 15.9164 0.494232 17.7747C0.771002 18.8027 1.58154 19.6132 2.60954 19.89C4.50739 20.404 11.9999 20.404 11.9999 20.404C11.9999 20.404 19.5123 20.404 21.3904 19.9097C22.4184 19.633 23.2289 18.8224 23.5057 17.7944C23.9999 15.9164 23.9999 12.0218 23.9999 12.0218C23.9999 12.0218 24.0197 8.10749 23.5057 6.22941Z" />
      <path
        d="M9.60791 15.6001L15.855 12.0021L9.60791 8.40405V15.6001Z"
        fill="white"
      />
    </svg>
  )
}
