import React, { ChangeEvent, FC } from 'react'
import clsxMerge from '@lib/clsxm'

export interface InputType {
  error?: string
  placeholder: string
  type: string
  id?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputType> = ({ error, placeholder, type = 'text', id, onChange }) => {
  const style = clsxMerge(
    'border',
    'rounded',
    'px-5',
    'py-2.5',
    'outline-0',
    'placeholder:text-base',
    'border-gray-light',
    'placeholder:text-black',
    'w-full',
    [error ? 'border-red placeholder:text-red' : 'border-gray-light placeholder:text-black']
  )

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={style}
        onChange={onChange}
      />
      {error ? <p className="mt-2.5 text-red">{error}</p> : null}
    </>
  )
}
