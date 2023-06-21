import React from 'react'
import TextField from '@uiComponents/FormFields/TextField'

const Count = ({
  fieldName,
  index,
  placeholder,
}: {
  fieldName: string
  index: number
  placeholder: string
}) => (
  <div>
    <TextField
      fieldName={`${fieldName}[${index}].count`}
      placeholder={placeholder}
    />
  </div>
)

export default Count
