import React, { ChangeEvent, LegacyRef, useState } from 'react'
import { EyeIcon } from '@components/Icons'
import clsxMerge from '@lib/clsxm'
import { Button } from '@uiComponents/Button'

const InputColor = ['primary', 'secondary'] as const

export interface InputType {
  id?: string
  type?: string
  placeholder?: string
  label?: string
  color?: (typeof InputColor)[number]
  rows?: number
  error?: string | null
  required?: boolean
  value?: string
  onChange?: (value: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export interface InputTypeCheckbox {
  id?: string
  label?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
}

export interface IImageInputProps {
  inputRef?: LegacyRef<HTMLInputElement>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string

  error?: string | null
}

export const Input = React.forwardRef(
  (
    {
      error,
      placeholder,
      label,
      color = 'primary',
      type = 'text',
      id,
      rows,
      required = false,
      value,
      onChange,
      className,
    }: InputType,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const style = clsxMerge(
      'rounded',
      'px-5',
      'py-2.5',
      'outline-0',
      'placeholder:text-black-light',
      'w-full',
      'border-2',
      [
        error
          ? 'border-red placeholder:text-red'
          : [
              color === 'primary' && 'focus:border-primary placeholder:text-black',
              color === 'secondary' && 'border-gray-thin placeholder:text-black',
            ],
      ],
      [label && 'mt-2.5'],
      [rows && 'resize-none']
    )

    const [inputType, setInputType] = useState<boolean>(false)

    return (
      <>
        <div className="relative">
          {label ? (
            <label
              htmlFor={id}
              className="text-sm text-black-light"
            >
              {label}
              {required ? '*' : ':'}
            </label>
          ) : null}
          {rows ? (
            <div>
              <textarea
                id={id}
                placeholder={placeholder}
                value={value}
                className={style}
                rows={rows}
                onChange={onChange}
                ref={ref as LegacyRef<HTMLTextAreaElement>}
              />
            </div>
          ) : (
            <>
              <input
                type={inputType ? 'text' : type}
                placeholder={placeholder}
                value={value}
                id={id}
                className={className ?? style}
                onChange={onChange}
                onKeyDown={(e) =>
                  (e.keyCode === 69 || e.keyCode === 189 || e.keyCode === 190) &&
                  type === 'number' &&
                  e.preventDefault()
                }
                ref={ref}
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
            </>
          )}
        </div>
        {error ? <p className="mt-2.5 text-xs text-red">{error}</p> : null}
      </>
    )
  }
)

export const InputCheckbox = React.forwardRef(
  (props: InputTypeCheckbox, ref: LegacyRef<HTMLInputElement>) => {
    const { label, id, onChange } = props

    return (
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          onChange={onChange}
          ref={ref}
          className="ml-1 h-5 w-5 rounded-sm border-black"
        />
        <label
          htmlFor={id}
          className="ml-3 text-sm"
        >
          {label}
        </label>
      </div>
    )
  }
)

export const ImageInput = React.forwardRef(
  ({ inputRef, onChange, type, error }: IImageInputProps) => (
    <div className="flex items-center">
      <input
        className="hidden"
        type={type}
        ref={inputRef}
        onChange={onChange}
      />
      {error ? <p className="mt-2.5 text-xs text-red">{error}</p> : null}
    </div>
  )
)
