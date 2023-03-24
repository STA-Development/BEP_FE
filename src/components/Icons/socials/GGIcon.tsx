import { FC } from 'react'

import clsxMerge from '@/lib/clsxm'

import SVGIcon from '@/types/svg-icon.type'

export const GGIcon: FC<SVGIcon> = ({ fill = 'fill-current', className, ...rest }) => {
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
      <rect
        width="24"
        height="24"
        fill="#fff"
        rx="12"
      />
      <path
        fill="#4285F4"
        fillRule="evenodd"
        d="M19.308 12.466c0-.518-.046-1.015-.133-1.493H12.3v2.823h3.929A3.358 3.358 0 0 1 14.772 16v1.831h2.36c1.38-1.27 2.176-3.142 2.176-5.365Z"
        clipRule="evenodd"
      />
      <path
        fill="#34A853"
        fillRule="evenodd"
        d="M12.3 19.6c1.971 0 3.624-.654 4.831-1.769L14.772 16c-.654.438-1.49.697-2.472.697-1.901 0-3.51-1.284-4.085-3.01H5.777v1.891A7.297 7.297 0 0 0 12.3 19.6Z"
        clipRule="evenodd"
      />
      <path
        fill="#FBBC05"
        fillRule="evenodd"
        d="M8.215 13.687a4.388 4.388 0 0 1-.229-1.387c0-.481.083-.949.23-1.387V9.022h-2.44A7.297 7.297 0 0 0 5 12.3c0 1.178.282 2.293.776 3.278l2.44-1.89Z"
        clipRule="evenodd"
      />
      <path
        fill="#EA4335"
        fillRule="evenodd"
        d="M12.3 7.903c1.072 0 2.034.369 2.79 1.092l2.095-2.094C15.92 5.723 14.268 5 12.3 5a7.297 7.297 0 0 0-6.523 4.022l2.438 1.891c.575-1.725 2.184-3.01 4.085-3.01Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
