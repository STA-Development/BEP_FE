import { ComponentPropsWithoutRef } from 'react'

type SVGIcon = ComponentPropsWithoutRef<'svg'> & {
  width?: number
  height?: number
  fill?: string
}

export default SVGIcon
