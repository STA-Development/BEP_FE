import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const JobSeekerIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      className={style}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M34.6667 37.4668V37.3332H11.3407C8.02868 37.3332 5.34375 40.018 5.34375 43.3303V44.8706C5.34375 47.2514 6.19311 49.554 7.73916 51.3644C11.916 56.2559 18.2787 58.6695 26.6677 58.6695C27.6211 58.6695 28.548 58.6383 29.4491 58.5759C29.3731 58.1735 29.3333 57.758 29.3333 57.3332V54.5748C28.4773 54.638 27.5888 54.6695 26.6677 54.6695C19.3655 54.6695 14.1231 52.6807 10.781 48.7668C9.85338 47.6807 9.34375 46.2991 9.34375 44.8706V43.3303C9.34375 42.2274 10.2378 41.3332 11.3407 41.3332H29.8883C30.7451 39.3722 32.5184 37.9028 34.6667 37.4668ZM26.6677 5.3457C34.0315 5.3457 40.0011 11.3152 40.0011 18.679C40.0011 26.0429 34.0315 32.0124 26.6677 32.0124C19.3038 32.0124 13.3343 26.0429 13.3343 18.679C13.3343 11.3152 19.3038 5.3457 26.6677 5.3457ZM26.6677 9.3457C21.513 9.3457 17.3343 13.5244 17.3343 18.679C17.3343 23.8337 21.513 28.0124 26.6677 28.0124C31.8224 28.0124 36.0011 23.8337 36.0011 18.679C36.0011 13.5244 31.8224 9.3457 26.6677 9.3457ZM37.3333 40.0002H36C33.7909 40.0002 32 41.7911 32 44.0002V57.3332C32 59.5426 33.7909 61.3332 36 61.3332H57.3333C59.5424 61.3332 61.3333 59.5426 61.3333 57.3332V44.0002C61.3333 41.7911 59.5424 40.0002 57.3333 40.0002H56V36.6666C56 34.0892 53.9107 31.9999 51.3333 31.9999H42C39.4227 31.9999 37.3333 34.0892 37.3333 36.6666V40.0002ZM41.3333 36.6666C41.3333 36.2986 41.6317 35.9999 42 35.9999H51.3333C51.7016 35.9999 52 36.2986 52 36.6666V40.0002H41.3333V36.6666Z"
        fill="#326789"
      />
    </svg>
  )
}
