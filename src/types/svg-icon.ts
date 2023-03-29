import { ComponentPropsWithoutRef } from 'react'

type IconProps = ComponentPropsWithoutRef<'svg'> & {
  width?: number
  height?: number
  fill?: string
}

export default IconProps
