import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch } from '@redux/hooks'
import { supportMiddleware } from '@redux/slices/support'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'
import { helpValidationSchema } from '@validation/support/help'

export const Help = () => {
  const [t] = useTranslation()

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
      <h2 className="text-lg">{t(Translation.HELP_TEL_PROBLEM)}</h2>
      <p className="text-base text-black-light">{t(Translation.HELP_TEXT)}</p>
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
                placeholder={`${t(Translation.HELP_HEADLINE)}`}
                error={fieldState.error ? t(Translation.HELP_HEADLINE_REQUIRED) : null}
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
                placeholder={`${t(Translation.HELP_PROBLEM)}`}
                rows={7}
                error={fieldState.error ? t(Translation.HELP_PROBLEM_REQUIRED) : null}
              />
            )}
          />
        </div>
        <div className="w-full">
          <Button
            size="fl"
            type="submit"
          >
            {t(Translation.HELP_BUTTON)}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Help
Help.Layout = 'Profile'
