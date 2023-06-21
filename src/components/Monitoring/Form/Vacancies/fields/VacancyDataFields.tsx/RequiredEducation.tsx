import React from 'react'
import TextField from '@uiComponents/FormFields/TextField'

const RequiredEducation = ({
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
      fieldName={`${fieldName}[${index}].education`}
      placeholder={placeholder}
    />
  </div>
)

export default RequiredEducation
