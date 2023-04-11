import React from 'react'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

export const Help = () => (
  <div className="grid gap-4 rounded bg-gray-thin p-5 xl:p-10">
    <h2 className="text-lg">Tell us about your problem:</h2>
    <p className="text-base text-black-light">
      Try to support your explanation with a screenshot, with that we can solve your problem faster.
    </p>
    <Input placeholder="Headline" />
    <Input
      placeholder="Type your problem here..."
      color="primary"
      rows={7}
    />
    <Button>Submit</Button>
  </div>
)

export default Help
Help.Layout = 'Profile'
