import React, { ChangeEvent, LegacyRef } from 'react'

export interface RadioProps {
  id?: string
  label?: string
  ref: LegacyRef<HTMLInputElement>
  error?: string | null
  value: string
  onChange?: (value: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  currentValue: string
}

const Radio = ({ error, label, id, value, currentValue, onChange, className, ref }: RadioProps) => (
  <div className="relative flex w-full items-center">
    <input
      id={id}
      type="radio"
      name="bordered-radio"
      checked={currentValue === value}
      className={`dark:focus:ring-primary-600 h-4 w-4 border-gray-300 bg-gray-100 text-primary ${className}`}
      value={value}
      onChange={onChange}
      ref={ref}
    />
    <label
      htmlFor={id}
      className="ml-2 w-full py-4 text-sm font-medium text-black "
    >
      {label}
    </label>
    {error ? <p className="mt-2.5 text-xs text-red">{error}</p> : null}
  </div>
)

export default Radio
