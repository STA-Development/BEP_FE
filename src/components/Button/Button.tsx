import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import Image from 'next/image'

const button = cva(
  [
    'flex',
    'items-center',
    'align-middle',
    'justify-center',
    'cursor-pointer',
    'select-none',
    'focus:outline-0',
    'overflow-clip',
    'font-medium',
    'text-base',
    'transition-colors',
    'transition-outline',
    'ease-in-out',
    'duration-200',
  ],
  {
    variants: {
      variant: {
        contained: '',
        outlined: '',
        text: '',
        // primary: 'bg-blue text-white border-blue hover:bg-blue-light',
        // secondary: 'bg-white text-blue border-blue hover:bg-blue-light hover:text-white',
        // outline: 'bg-transparent text-white border-white hover:bg-blue-light hover:text-white',
        // transparent: 'bg-transparent text-blue border-transparent hover:underline',
        // 'transparent-secondary': 'bg-transparent text-white border-transparent hover:underline',
        // 'transparent-secondary-outline':
        //   'bg-transparent text-blue border-gray-light hover:outline outline-2 outline-blue -outline-offset-2',
        // 'list-item':
        //   'bg-blue text-white border-black-light hover:bg-white hover:text-blue hover:border-blue hover:underline',
        // application:
        //   'flex-col bg-gray-thin text-blue border-2 border-gray-thin hover:bg-white hover:border-blue font-normal',
      },
      color: {
        primary: '',
        secondary: '',
      },
      size: {
        xs: 'p-0',
        sm: 'px-5 py-2.5',
        bs: 'px-10 py-2.5',
        lg: 'px-20 py-2.5',
        hg: 'w-full p-10',
        app: 'w-[224px] h-[191px]',
        // auto: 'px-5 py-2.5 w-auto min-w-max',
        // sm: 'p-0',
        // base: 'px-10 py-2.5',
        // lg: 'px-20 py-2.5',
        // huge: 'w-full p-10',
        // 'w-40': 'w-40 py-2.5',
        // 'w-full': 'w-full py-2.5',
        // application: 'w-[224px] h-[191px]',
      },
      radius: {
        all: 'rounded',
        r: 'rounded-r',
        l: 'rounded-l',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        class: 'bg-primary text-secondary',
      },
      {
        variant: 'contained',
        color: 'secondary',
        class: 'bg-secondary text-primary',
      },
      {
        variant: ['outlined', 'text'],
        color: 'primary',
        class: 'bg-white text-primary',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      size: 'sm',
      radius: 'all',
    },
  }
)

export type ButtonProps = {
  children: ReactNode
  leftIcon?: string
  rightIcon?: string
  disabled?: boolean
  href?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: MouseEventHandler
  className?: string
  target?: HTMLAttributeAnchorTarget
} & VariantProps<typeof button>

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  disabled = false,
  type = 'button',
  onClick,
  className,
  ...rest
}: ButtonProps) => (
  <button
    disabled={disabled}
    type={type}
    className={button({ ...rest, className })}
    onClick={onClick}
  >
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
