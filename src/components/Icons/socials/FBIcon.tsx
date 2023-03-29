import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const FBIcon: FC<IconProps> = ({ fill = 'fill-[#1877F2]', className, ...rest }) => {
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
      <path d="M17.2137 13.3283L17.8356 9.23311H13.9452V6.5768C13.9452 5.45617 14.4877 4.3632 16.2301 4.3632H18V0.876797C18 0.876797 16.3945 0.600098 14.8603 0.600098C11.6548 0.600098 9.56164 2.56189 9.56164 6.11194V9.23311H6V13.3283H9.56164V23.2285C10.2767 23.342 11.0082 23.4001 11.7534 23.4001C12.4986 23.4001 13.2301 23.342 13.9452 23.2285V13.3283H17.2137Z" />
    </svg>
  )
}
