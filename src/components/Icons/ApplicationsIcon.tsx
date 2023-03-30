import React, { FC } from 'react'
import IconProps from '@allTypes/svg-icon'
import clsxMerge from '@lib/clsxm'

export const ApplicationsIcon: FC<IconProps> = ({ fill = 'fill-primary', className, ...rest }) => {
  const style = clsxMerge(fill, className)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      className={style}
      {...rest}
    >
      <path d="M6.25 3.5C4.45507 3.5 3 4.95507 3 6.75V18.25C3 20.0449 4.45507 21.5 6.25 21.5H12.0218C11.7253 21.0368 11.4858 20.5335 11.3135 20H6.25C5.2835 20 4.5 19.2165 4.5 18.25V6.75C4.5 5.7835 5.2835 5 6.25 5H17.75C18.7165 5 19.5 5.7835 19.5 6.75V11.8135C20.0335 11.9858 20.5368 12.2253 21 12.5218V6.75C21 4.95507 19.5449 3.5 17.75 3.5H6.25ZM17.5 11.5C17.6518 11.5 17.8024 11.5052 17.9517 11.5154C17.9829 11.4329 18 11.3435 18 11.25C18 10.8358 17.6642 10.5 17.25 10.5H12.75C12.3358 10.5 12 10.8358 12 11.25C12 11.6642 12.3358 12 12.75 12H14.9956C15.7664 11.6779 16.6124 11.5 17.5 11.5ZM6.75 6.5C6.33579 6.5 6 6.83579 6 7.25C6 7.66421 6.33579 8 6.75 8H17.25C17.6642 8 18 7.66421 18 7.25C18 6.83579 17.6642 6.5 17.25 6.5H6.75ZM6 11.25C6 10.0074 7.00736 9 8.25 9C9.49264 9 10.5 10.0074 10.5 11.25C10.5 12.4926 9.49264 13.5 8.25 13.5C7.00736 13.5 6 12.4926 6 11.25ZM8.25 10.5C7.83579 10.5 7.5 10.8358 7.5 11.25C7.5 11.6642 7.83579 12 8.25 12C8.66421 12 9 11.6642 9 11.25C9 10.8358 8.66421 10.5 8.25 10.5ZM8.25 14.5C7.00736 14.5 6 15.5074 6 16.75C6 17.9926 7.00736 19 8.25 19C9.49264 19 10.5 17.9926 10.5 16.75C10.5 15.5074 9.49264 14.5 8.25 14.5ZM7.5 16.75C7.5 16.3358 7.83579 16 8.25 16C8.66421 16 9 16.3358 9 16.75C9 17.1642 8.66421 17.5 8.25 17.5C7.83579 17.5 7.5 17.1642 7.5 16.75ZM23 18C23 14.9624 20.5376 12.5 17.5 12.5C14.4624 12.5 12 14.9624 12 18C12 21.0376 14.4624 23.5 17.5 23.5C20.5376 23.5 23 21.0376 23 18ZM18.0006 18.5L18.0011 21.0035C18.0011 21.2797 17.7773 21.5035 17.5011 21.5035C17.225 21.5035 17.0011 21.2797 17.0011 21.0035L17.0006 18.5H14.4956C14.2197 18.5 13.9961 18.2762 13.9961 18C13.9961 17.7239 14.2197 17.5 14.4956 17.5H17.0005L17 14.9993C17 14.7231 17.2239 14.4993 17.5 14.4993C17.7761 14.4993 18 14.7231 18 14.9993L18.0005 17.5H20.4966C20.7725 17.5 20.9961 17.7239 20.9961 18C20.9961 18.2762 20.7725 18.5 20.4966 18.5H18.0006Z" />
    </svg>
  )
}