import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch } from '@redux/hooks'
import { supportMiddleware } from '@redux/slices/support'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

import { helpValidationSchema } from '../../../validation/support/help'

export const Help = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      headline: '',
      problem: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(helpValidationSchema),
  })

  const onSubmit = (data: IHelpDataProps) => {
    dispatch(
      supportMiddleware.fetchHelpMessage({
        headline: data.headline,
        problem: data.problem,
      })
    )
  }

  return (
    <div className="grid gap-4 rounded bg-gray-thin p-5 xl:p-10">
      <h2 className="text-lg">Tell us about your problem:</h2>
      <p className="text-base text-black-light">
        Try to support your explanation with a screenshot, with that we can solve your problem
        faster.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-center"
      >
        <div className="mb-5">
          <Controller
            control={control}
            name="headline"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                placeholder="Headline"
                error={fieldState.error ? fieldState.error.message : null}
              />
            )}
          />
        </div>
        <div className="mb-5">
          <Controller
            control={control}
            name="problem"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                placeholder="Type your problem here..."
                rows={7}
                error={fieldState.error ? fieldState.error.message : null}
              />
            )}
          />
        </div>
        <div className="w-full">
          <Button
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Help
Help.Layout = 'Profile'
