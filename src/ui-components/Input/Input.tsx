import React, { ChangeEvent, FC, useState } from 'react'
import { EyeIcon } from '@components/Icons'
import clsxMerge from '@lib/clsxm'
import { Button } from '@uiComponents/Button'

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
    'border-2',
    [error ? 'border-red placeholder:text-red' : 'border-gray-light placeholder:text-black']
  )

  const [inputType, setInputType] = useState<boolean>(false)

  return (
    <>
      <div className="relative">
        <input
          type={inputType ? 'text' : type}
          placeholder={placeholder}
          id={id}
          className={style}
          onChange={onChange}
        />
        {type === 'password' ? (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="text"
              onClick={() => setInputType(!inputType)}
            >
              <EyeIcon />
            </Button>
          </div>
        ) : null}
      </div>
      {error ? <p className="text- mt-2.5 text-xs text-red">{error}</p> : null}
    </>
  )
}
