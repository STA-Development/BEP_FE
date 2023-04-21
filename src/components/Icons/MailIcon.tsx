import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const MailIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <path
        d="M4.37496 3.33333H15.625C17.0691 3.33333 18.2493 4.46371 18.329 5.88798L18.3333 6.04167V13.9583C18.3333 15.4025 17.2029 16.5827 15.7786 16.6624L15.625 16.6667H4.37496C2.93077 16.6667 1.75058 15.5362 1.67091 14.112L1.66663 13.9583V6.04167C1.66663 4.59747 2.797 3.41729 4.22128 3.33762L4.37496 3.33333H15.625H4.37496ZM17.0833 7.81083L10.291 11.3864C10.1349 11.4686 9.95254 11.4803 9.78896 11.4217L9.70888 11.3864L2.91663 7.81167V13.9583C2.91663 14.7235 3.50588 15.351 4.25535 15.4118L4.37496 15.4167H15.625C16.3901 15.4167 17.0176 14.8274 17.0785 14.0779L17.0833 13.9583V7.81083ZM15.625 4.58333H4.37496C3.60982 4.58333 2.9823 5.17259 2.92146 5.92206L2.91663 6.04167V6.39917L9.99996 10.1271L17.0833 6.39833V6.04167C17.0833 5.27652 16.494 4.64901 15.7445 4.58817L15.625 4.58333Z"
        fill="#666666"
      />
    </svg>
  )
}
