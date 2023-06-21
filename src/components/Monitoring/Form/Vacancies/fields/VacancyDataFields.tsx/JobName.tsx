import React from 'react'
import TextField from '@uiComponents/FormFields/TextField'

const JobName = ({
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
      fieldName={`${fieldName}[${index}].name`}
      placeholder={placeholder}
    />
  </div>
)

export default JobName
