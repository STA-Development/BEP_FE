import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const ClipboardTaskListIcon: FC<IconProps> = ({
  fill = 'fill-primary',
  className,
  ...rest
}) => {
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
      <path d="M33.3327 27.332C33.3327 26.2275 34.2281 25.332 35.3327 25.332H44.666C45.7705 25.332 46.666 26.2275 46.666 27.332C46.666 28.4366 45.7705 29.332 44.666 29.332H35.3327C34.2281 29.332 33.3327 28.4366 33.3327 27.332ZM35.333 39.9987C34.2281 39.9987 33.333 40.8942 33.333 41.9987C33.333 43.1032 34.2281 43.9987 35.333 43.9987H44.6658C45.7706 43.9987 46.6658 43.1032 46.6658 41.9987C46.6658 40.8942 45.7706 39.9987 44.6658 39.9987H35.333ZM28.7468 26.0796C29.5279 25.2985 29.5279 24.0322 28.7468 23.2512C27.9657 22.4701 26.6996 22.4701 25.9185 23.2512L21.9993 27.1702L20.7469 25.9178C19.9659 25.1368 18.6995 25.1368 17.9185 25.9178C17.1374 26.699 17.1374 27.9651 17.9185 28.7462L20.5851 31.4128C21.3662 32.1939 22.6325 32.1939 23.4136 31.4128L28.7468 26.0796ZM28.7468 37.9179C29.5279 38.699 29.5279 39.9651 28.7468 40.7462L23.4136 46.0795C22.6325 46.8606 21.3662 46.8606 20.5851 46.0795L17.9185 43.4128C17.1374 42.6318 17.1374 41.3656 17.9185 40.5846C18.6995 39.8035 19.9659 39.8035 20.7469 40.5846L21.9993 41.8368L25.9185 37.9179C26.6996 37.1368 27.9657 37.1368 28.7468 37.9179ZM42.65 10.8907C42.4242 7.78304 39.8314 5.33203 36.666 5.33203H27.3327C24.2448 5.33203 21.7018 7.66462 21.3695 10.6639L16.666 10.6654C13.3523 10.6654 10.666 13.3517 10.666 16.6654V52.6654C10.666 55.979 13.3523 58.6654 16.666 58.6654H47.3327C50.6463 58.6654 53.3327 55.979 53.3327 52.6654V16.6654C53.3327 13.3517 50.6463 10.6654 47.3327 10.6654L42.6292 10.6639C42.6375 10.7391 42.6444 10.8147 42.65 10.8907ZM42.6521 10.9212L42.666 11.332C42.666 11.194 42.6615 11.057 42.6521 10.9212ZM27.3327 17.332H36.666C38.746 17.332 40.5791 16.2736 41.6553 14.6658L47.3327 14.6654C48.4372 14.6654 49.3327 15.5608 49.3327 16.6654V52.6654C49.3327 53.7699 48.4372 54.6654 47.3327 54.6654H16.666C15.5615 54.6654 14.666 53.7699 14.666 52.6654V16.6654C14.666 15.5608 15.5615 14.6654 16.666 14.6654L22.3434 14.6659C23.4198 16.2736 25.2526 17.332 27.3327 17.332ZM27.3327 9.33203H36.666C37.7705 9.33203 38.666 10.2275 38.666 11.332C38.666 12.4366 37.7705 13.332 36.666 13.332H27.3327C26.2281 13.332 25.3327 12.4366 25.3327 11.332C25.3327 10.2275 26.2281 9.33203 27.3327 9.33203Z" />
    </svg>
  )
}