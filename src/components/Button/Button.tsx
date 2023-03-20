import { ComponentPropsWithoutRef, FC } from 'react'
import Image from 'next/image'

import clsxMerge from '@/lib/clsxm'

const ButtonVariant = ['contained', 'outlined', 'text'] as const
const ButtonColor = ['primary', 'secondary', 'gray'] as const
const ButtonSize = ['xs', 'sm', 'bs', 'lg', 'fl', 'hg', 'app'] as const
const ButtonRadius = ['all', 'r', 'l'] as const

export type ButtonProps = {
  isLoading?: boolean
  variant?: (typeof ButtonVariant)[number]
  color?: (typeof ButtonColor)[number]
  size?: (typeof ButtonSize)[number]
  radius?: (typeof ButtonRadius)[number]
  leftIcon?: string
  rightIcon?: string
} & ComponentPropsWithoutRef<'button'>

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'contained',
  color = 'primary',
  size = 'sm',
  radius = 'all',
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const disabled = isLoading || buttonDisabled

  const style = clsxMerge(
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
    'transition-colors',
    'ease-in-out',
    'duration-200',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    [
      variant === 'contained' && [
        'hover:border-primary-light hover:bg-primary-light',
        color === 'primary' && 'border-primary bg-primary text-secondary',
        color === 'secondary' && 'border-secondary bg-secondary text-primary hover:text-secondary',
        color === 'gray' && 'border-gray-thin bg-gray-thin bg-gray-thin text-primary',
      ],
      variant === 'outlined' && [
        'hover:border-primary-light hover:bg-primary-light',
        color === 'primary' && 'border-primary bg-secondary text-primary hover:text-secondary',
        color === 'secondary' && 'border-secondary bg-primary text-secondary',
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
      size === 'bs' && 'px-10 py-2.5',
      size === 'lg' && 'w-full px-20 py-2.5 xl:w-auto',
      size === 'fl' && 'w-full py-2.5',
      size === 'hg' && 'w-full p-10',
      size === 'app' && 'h-[191px] w-[224px]',
    ],
    // isLoading &&
    //   'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
    className
  )

  return (
    <button
      disabled={disabled}
      className={style}
      {...rest}
    >
      {/*{isLoading && (*/}
      {/*  <div*/}
      {/*    className={clsxm('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', {*/}
      {/*      'text-white': ['primary', 'dark'].includes(variant),*/}
      {/*      'text-black': ['light'].includes(variant),*/}
      {/*      'text-primary-500': ['outline', 'ghost'].includes(variant),*/}
      {/*    })}*/}
      {/*  >*/}
      {/*    <ImSpinner2 className="animate-spin" />*/}
      {/*  </div>*/}
      {/*)}*/}
      {leftIcon ? (
        <Image
          src={leftIcon}
          alt="icon"
          className="mr-5"
        />
      ) : null}
      {children}
      {rightIcon ? (
        <Image
          src={rightIcon}
          alt="icon"
          className="ml-5"
        />
      ) : null}
    </button>
  )
}

// import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react'
// import { cva } from 'class-variance-authority'
// import Image from 'next/image'
//
// import { cx } from '@/helpers/cx'
//
// const button = cva(
//   [
//     'flex',
//     'items-center',
//     'align-middle',
//     'justify-center',
//     'border-2',
//     'cursor-pointer',
//     'select-none',
//     'focus:outline-0',
//     'overflow-clip',
//     'font-medium',
//     'text-base',
//     'transition-colors',
//     'ease-in-out',
//     'duration-200',
//     'focus:outline-none',
//   ],
//   {
//     variants: {
//       variant: {
//         contained: '',
//         outlined: '',
//         text: 'text-white hover:underline border-transparent',
//         // primary: 'bg-blue text-white border-blue hover:bg-blue-light',
//         // secondary: 'bg-white text-blue border-blue hover:bg-blue-light hover:text-white',
//         // outline: 'bg-transparent text-white border-white hover:bg-blue-light hover:text-white',
//         // transparent: 'bg-transparent text-blue border-transparent hover:underline',
//         // 'transparent-secondary': 'bg-transparent text-white border-transparent hover:underline',
//         // 'transparent-secondary-outline':
//         //   'bg-transparent text-blue border-gray-light hover:outline outline-2 outline-blue -outline-offset-2',
//         // 'list-item':
//         //   'bg-blue text-white border-black-light hover:bg-white hover:text-blue hover:border-blue hover:underline',
//         // application:
//         //   'flex-col bg-gray-thin text-blue border-2 border-gray-thin hover:bg-white hover:border-blue font-normal',
//       },
//       color: {
//         primary: '',
//         secondary: '',
//       },
//       size: {
//         xs: 'p-0',
//         sm: 'px-5 py-2.5',
//         bs: 'px-10 py-2.5',
//         lg: 'px-20 py-2.5 w-full xl:w-auto',
//         hg: 'w-full p-10',
//         app: 'w-[224px] h-[191px]',
//         // auto: 'px-5 py-2.5 w-auto min-w-max',
//         // sm: 'p-0',
//         // base: 'px-10 py-2.5',
//         // lg: 'px-20 py-2.5',
//         // huge: 'w-full p-10',
//         // 'w-40': 'w-40 py-2.5',
//         // 'w-full': 'w-full py-2.5',
//         // application: 'w-[224px] h-[191px]',
//       },
//       radius: {
//         all: 'rounded',
//         r: 'rounded-r',
//         l: 'rounded-l',
//       },
//     },
//     compoundVariants: [
//       {
//         variant: 'contained',
//         color: 'primary',
//         className:
//           'bg-primary text-secondary border-primary hover:bg-primary-light hover:border-primary-light',
//       },
//       {
//         variant: 'contained',
//         color: 'secondary',
//         className:
//           'bg-secondary text-primary border-secondary hover:bg-primary-light hover:border-primary-light hover:text-secondary',
//       },
//       {
//         variant: 'outlined',
//         color: 'primary',
//         className:
//           'bg-secondary text-primary border-primary hover:bg-primary-light hover:border-primary-light hover:text-secondary',
//       },
//       {
//         variant: 'outlined',
//         color: 'secondary',
//         className:
//           'bg-primary text-secondary border-secondary hover:bg-primary-light hover:border-primary-light',
//       },
//     ],
//     defaultVariants: {
//       variant: 'contained',
//       color: 'primary',
//       size: 'sm',
//       radius: 'all',
//     },
//   } as never
// )
//
// export type ButtonProps = {
//   children: ReactNode
//   leftIcon?: string
//   rightIcon?: string
//   disabled?: boolean
//   href?: string
//   type?: 'button' | 'submit' | 'reset' | undefined
//   onClick?: MouseEventHandler
//   className?: string
//   target?: HTMLAttributeAnchorTarget
// }
//
// export const Button = ({
//   children,
//   leftIcon,
//   rightIcon,
//   disabled = false,
//   type = 'button',
//   onClick,
//   className,
// }: ButtonProps) => {
//   const style = cx(
//     'flex',
//     'items-center',
//     'align-middle',
//     'justify-center',
//     'border-2',
//     'cursor-pointer',
//     'select-none',
//     'focus:outline-0',
//     'overflow-clip',
//     'font-medium',
//     'text-base',
//     'transition-colors',
//     'ease-in-out',
//     'duration-200',
//     'focus:outline-none',
//     hasError && 'bg-red',
//     isEnabled || 'pointer-events-none',
//     isTitle ? 'font-semibold' : 'font-normal',
//     className
//   )
//
//   return (
//     <button
//       disabled={disabled}
//       type={type}
//       className={style}
//       onClick={onClick}
//     >
//       {leftIcon ? (
//         <Image
//           src={leftIcon}
//           alt="icon"
//           className="mr-5"
//         />
//       ) : null}
//       {children}
//
//       {rightIcon ? (
//         <Image
//           src={rightIcon}
//           alt="icon"
//           className="ml-5"
//         />
//       ) : null}
//     </button>
//   )
// }
