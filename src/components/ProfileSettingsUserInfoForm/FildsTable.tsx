import React from 'react'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

interface IFildsTableProps {
  type: string
  fieldName: string
  label: string
  showParams: string
  button: string
  setShowParams: (fieldName: string) => void
  fieldState: string | null
}

export const FildsTable = ({
  type,
  fieldName,
  label,
  showParams,
  button,
  setShowParams,
  fieldState,
}: IFildsTableProps) => (
  <tr>
    <td className="block px-0 pb-2.5 pt-5 align-top xl:table-cell xl:py-10">
      <label
        htmlFor=""
        className="text-sm text-black-light"
      >
        {label}:
      </label>
    </td>

    <td className="block p-0 xl:table-cell xl:py-10 xl:pr-10">
      {showParams === fieldName ? (
        <TextField
          type={type}
          fieldName={fieldName}
        />
      ) : (
        <p>{fieldState}</p>
      )}
    </td>
    <td className="block w-1 w-full p-0 py-5 xl:table-cell xl:w-48 xl:py-10">
      {showParams === fieldName ? (
        <Button
          variant="outlined"
          size="fl"
          value="12431241"
          type="submit"
        >
          Save
        </Button>
      ) : (
        <Button
          variant="outlined"
          size="fl"
          onClick={() => setShowParams(fieldName)}
        >
          {button}
        </Button>
      )}
    </td>
  </tr>
)
