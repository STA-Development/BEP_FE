import { FC } from 'react'

import clsxMerge from '@/lib/clsxm'

import SVGIcon from '@/types/svg-icon.type'

export const ToolboxIcon: FC<SVGIcon> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M18.6663 16.6738V18.6668H11.333C8.0193 18.6668 5.33301 21.3531 5.33301 24.6668V47.325C5.33301 50.6386 8.0193 53.325 11.333 53.325H52.6663C55.9799 53.325 58.6663 50.6386 58.6663 47.325V24.6668C58.6663 21.3531 55.9799 18.6668 52.6663 18.6668H45.333V16.6738C45.333 13.3601 42.6466 10.6738 39.333 10.6738H24.6663C21.3526 10.6738 18.6663 13.3601 18.6663 16.6738ZM24.6663 14.6738H39.333C40.4375 14.6738 41.333 15.5693 41.333 16.6738V18.6668H22.6663V16.6738C22.6663 15.5693 23.5618 14.6738 24.6663 14.6738ZM18.6663 22.6738H22.6663V22.6668H41.333V22.6738H45.333V22.6668H52.6663C53.7709 22.6668 54.6663 23.5623 54.6663 24.6668V30.6668H46.6663V28.6668C46.6663 27.5623 45.7709 26.6668 44.6663 26.6668C43.5618 26.6668 42.6663 27.5623 42.6663 28.6668V30.6668H21.333V28.6668C21.333 27.5623 20.4376 26.6668 19.333 26.6668C18.2284 26.6668 17.333 27.5623 17.333 28.6668V30.6668H9.33301V24.6668C9.33301 23.5623 10.2284 22.6668 11.333 22.6668H18.6663V22.6738ZM42.6663 34.6668V38.0001C42.6663 39.1047 43.5618 40.0001 44.6663 40.0001C45.7709 40.0001 46.6663 39.1047 46.6663 38.0001V34.6668H54.6663V47.325C54.6663 48.4295 53.7709 49.325 52.6663 49.325H11.333C10.2284 49.325 9.33301 48.4295 9.33301 47.325V34.6668H17.333V38.0001C17.333 39.1047 18.2284 40.0001 19.333 40.0001C20.4376 40.0001 21.333 39.1047 21.333 38.0001V34.6668H42.6663Z" />
    </svg>
  )
}
