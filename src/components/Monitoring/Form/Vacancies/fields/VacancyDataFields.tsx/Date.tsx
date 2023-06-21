import React from 'react'
import TextField from '@uiComponents/FormFields/TextField'

const Date = ({
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
      fieldName={`${fieldName}[${index}].startDate`}
      placeholder={placeholder}
    />
  </div>
)

export default Date
