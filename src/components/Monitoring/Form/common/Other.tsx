import React from 'react'
import TextField from '@uiComponents/FormFields/TextField'

interface IOtherProps {
  fieldName: string
  placeholder: string
}

const Other = ({ fieldName, placeholder }: IOtherProps) => (
  <div className="mt-4">
    <TextField
      fieldName={fieldName}
      placeholder={placeholder}
    />
  </div>
)

export default Other
