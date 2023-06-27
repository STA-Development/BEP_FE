import React, { ComponentPropsWithoutRef, ComponentType, FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import IsLoading from '@components/IsLoading'
import clsxMerge from '@lib/clsxm'

const ButtonVariant = ['contained', 'outlined', 'flat', 'text'] as const
const ButtonColor = ['primary', 'secondary', 'gray'] as const
const ButtonSize = ['xs', 'sm', 'md', 'bs', 'lg', 'fl', 'hg', 'app', 'role'] as const
const ButtonRadius = ['all', 'r', 'l'] as const

export type ButtonProps = {
  isLoading?: boolean
  variant?: (typeof ButtonVariant)[number]
  color?: (typeof ButtonColor)[number]
  active?: boolean
  size?: (typeof ButtonSize)[number]
  radius?: (typeof ButtonRadius)[number]
  LeftIcon?: ComponentType<IconProps>
  RightIcon?: ComponentType<IconProps>
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  isLoading,
  active,
  variant = 'contained',
  color = 'primary',
  size = 'sm',
  radius = 'all',
  LeftIcon,
  RightIcon,
  ...rest
}) => {
  const buttonStyle = clsxMerge(
    'flex',
    'items-center',
    'align-middle',
    'justify-center',
    'border-2',
    'cursor-pointer',
    'select-none',
    'focus:outline-0',
    'overflow-clip',
    'font-medium',
    'text-base',
    'transition-none',
    'ease-in-out',
    'duration-200',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'group',
    [
      variant !== 'text' && ['disabled:bg-black-light', 'disabled:opacity-50'],
      variant === 'contained' && [
        'hover:border-primary-light hover:bg-primary-light',
        color === 'primary' && 'border-primary bg-primary text-secondary',
        color === 'secondary' && 'border-secondary bg-secondary text-primary hover:text-secondary',
        color === 'gray' && [
          'border-gray-thin bg-gray-thin text-primary hover:bg-secondary',
          active && 'border-primary-light bg-secondary',
        ],
      ],
      variant === 'outlined' && [
        'hover:border-primary-light hover:bg-primary-light',
        color === 'primary' && 'border-primary bg-secondary text-primary hover:text-secondary',
        color === 'secondary' && 'border-secondary bg-primary text-secondary',
      ],
      variant === 'flat' && [
        'hover:border-primary-light hover:bg-primary-light',
        color === 'primary' && 'border-secondary text-primary justify-start hover:text-secondary',
      ],
      variant === 'text' && [
        'border-transparent hover:underline',
        color === 'primary' && 'text-primary',
        color === 'secondary' && 'text-secondary',
      ],
    ],
    [radius === 'all' && 'rounded', radius === 'r' && 'rounded-r', radius === 'l' && 'rounded-l'],
    [
      size === 'xs' && 'p-0',
      size === 'sm' && 'px-5 py-2.5',
      size === 'md' && 'px-5 py-2.5 text-sm font-normal',
      size === 'bs' && 'px-10 py-2.5',
      size === 'lg' && 'w-full px-20 py-2.5 xl:w-auto',
      size === 'fl' && 'w-full p-2.5',
      size === 'hg' && 'w-full p-10',
      size === 'app' && 'h-[191px] w-[224px]',
      size === 'role' && 'h-[191px] w-[340px] flex-col',
    ],
    className
  )

  const iconStyle = clsxMerge([
    variant === 'contained' && 'fill-secondary',
    variant === 'outlined' && 'fill-primary group-hover:fill-secondary',
    variant === 'text' && 'fill-primary',
  ])

  return (
    <button
      disabled={disabled}
      className={buttonStyle}
      type="button"
      {...rest}
    >
      {LeftIcon ? (
        <div className="mr-2.5">
          <LeftIcon fill={iconStyle} />
        </div>
      ) : null}
      {isLoading ? <IsLoading /> : children}
      {RightIcon ? (
        <div className="ml-2.5">
          <RightIcon fill={iconStyle} />
        </div>
      ) : null}
    </button>
  )
}
