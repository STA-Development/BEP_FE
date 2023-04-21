import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const BarsIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M3.67009 23.9997H28.3367C28.8891 23.9997 29.3367 24.4474 29.3367 24.9997C29.3367 25.5059 28.9606 25.9243 28.4724 25.9905L28.3367 25.9997H3.67009C3.1178 25.9997 2.67009 25.5519 2.67009 24.9997C2.67009 24.4934 3.04629 24.075 3.5344 24.0087L3.67009 23.9997ZM3.67009 15.337H28.3367C28.8891 15.337 29.3367 15.7847 29.3367 16.337C29.3367 16.8433 28.9606 17.2617 28.4724 17.3279L28.3367 17.337H3.67009C3.1178 17.337 2.67009 16.8893 2.67009 16.337C2.67009 15.8307 3.04629 15.4123 3.5344 15.3461L3.67009 15.337ZM3.66895 6.67065H28.3356C28.8879 6.67065 29.3356 7.11837 29.3356 7.67065C29.3356 8.17692 28.9594 8.59531 28.4714 8.66152L28.3356 8.67065H3.66895C3.11665 8.67065 2.66895 8.22293 2.66895 7.67065C2.66895 7.16439 3.04515 6.746 3.53325 6.67979L3.66895 6.67065Z" />
    </svg>
  )
}
