import React, { ChangeEvent, FC } from 'react'

export interface InputType {
  label?: string
  id?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
}

const InputCheckbox: FC<InputType> = ({ label, id, onChange }) => (
  <>
    <input
      id={id}
      type="checkbox"
      onChange={onChange}
      className="ml-1 h-5 w-5 rounded-sm border-black"
    />
    <label
      htmlFor={id}
      className="ml-3 text-sm"
    >
      {label}
    </label>
  </>
)

export default InputCheckbox
