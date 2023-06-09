import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const LeftIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="25"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M11.5991 24.1895C12.0489 24.6182 12.7611 24.6008 13.1897 24.1508C13.6182 23.7008 13.6008 22.9884 13.1509 22.5598L3.77381 13.6253H50.25C50.8713 13.6253 51 13.1219 51 12.5005C51 11.879 50.8713 11.3747 50.25 11.3747H3.77365L13.1509 2.44015C13.6008 2.01149 13.6181 1.2992 13.1897 0.849174C12.7611 0.399167 12.0489 0.381837 11.5991 0.810493L0.470685 11.4136C0.21729 11.655 0.0673651 11.9629 0.0208951 12.2831C0.00718512 12.3533 0 12.4259 0 12.5C0 12.5744 0.00721487 12.6471 0.0209699 12.7174C0.0675299 13.0375 0.21744 13.3452 0.470685 13.5865L11.5991 24.1895Z" />
    </svg>
  )
}
