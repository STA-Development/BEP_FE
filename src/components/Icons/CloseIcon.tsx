import { FC } from 'react'

import clsxMerge from '@/lib/clsxm'

import SVGIcon from '@/types/svg-icon.type'

export const CloseIcon: FC<SVGIcon> = ({ fill = 'fill-white', className, ...rest }) => {
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
      <path d="M5.86275 6.0718L5.95958 5.95964C6.31461 5.60462 6.87015 5.57235 7.26163 5.86282L7.37379 5.95964L16 14.5854L24.6263 5.95964C25.0168 5.56912 25.6499 5.56912 26.0404 5.95964C26.431 6.35016 26.431 6.98334 26.0404 7.37386L17.4147 16.0001L26.0404 24.6263C26.3955 24.9813 26.4278 25.5369 26.1372 25.9283L26.0404 26.0405C25.6855 26.3955 25.1299 26.4278 24.7384 26.1373L24.6263 26.0405L16 17.4147L7.37379 26.0405C6.98327 26.431 6.3501 26.431 5.95958 26.0405C5.56906 25.6499 5.56906 25.0169 5.95958 24.6263L14.5854 16.0001L5.95958 7.37386C5.60455 7.01883 5.57229 6.46328 5.86275 6.0718Z" />
    </svg>
  )
}
