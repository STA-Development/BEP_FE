import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const EditIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      {...rest}
    >
      <path
        d="M21.4519 3.5481C20.0543 2.15058 17.7885 2.15064 16.3911 3.54825L4.44103 15.4997C4.0347 15.9061 3.7491 16.4172 3.616 16.9762L2.52041 21.5777C2.46009 21.8311 2.53552 22.0976 2.71968 22.2817C2.90385 22.4659 3.17037 22.5413 3.42373 22.481L8.02498 21.3855C8.58418 21.2523 9.09546 20.9666 9.50191 20.5601L21.452 8.60861C22.8493 7.21112 22.8493 4.9455 21.4519 3.5481ZM17.4518 4.60884C18.2634 3.79709 19.5795 3.79705 20.3912 4.60876C21.2028 5.4204 21.2029 6.73632 20.3913 7.54801L19.5 8.43946L16.5606 5.50012L17.4518 4.60884ZM15.5 6.56084L18.4394 9.50018L8.44119 19.4995C8.23104 19.7097 7.96668 19.8574 7.67755 19.9263L4.26191 20.7395L5.07521 17.3237C5.14402 17.0346 5.29168 16.7704 5.50175 16.5603L15.5 6.56084Z"
        fill="white"
      />
    </svg>
  )
}
