import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { supportMiddleware, supportSelector } from '@redux/slices/support'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'
import { helpValidationSchema } from '@validation/support/help'

const defaultValues = {
  headline: '',
  problem: '',
}

export const Help = () => {
  const [t] = useTranslation()
  const isHelpMessageSuccess = useAppSelector(supportSelector.isHelpMessageSuccess)

  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(helpValidationSchema),
  })

  const { handleSubmit, reset } = methods
  const onSubmit = (data: IHelpDataProps) => {
    dispatch(
      supportMiddleware.createHelpMessage({
        headline: data.headline,
        problem: data.problem,
      })
    )
  }

  useEffect(() => {
    if (isHelpMessageSuccess) {
      reset({ ...defaultValues })
      dispatch(supportMiddleware.resetHelpMessageSuccess())
    }
  }, [isHelpMessageSuccess, reset])

  return (
    <div className="grid gap-4 rounded bg-gray-thin p-5 xl:p-10">
      <h2 className="text-lg">{t(Translation.HELP_TEL_PROBLEM)}</h2>
      <p className="text-base text-black-light">{t(Translation.HELP_TEXT)}</p>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full text-center"
        >
          <div className="mb-5">
            <TextField
              fieldName="headline"
              placeholder={`${t(Translation.HELP_HEADLINE)}`}
            />
          </div>
          <div className="mb-5">
            <TextField
              fieldName="problem"
              rows={7}
              placeholder={`${t(Translation.HELP_PROBLEM)}`}
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
      </FormProvider>
    </div>
  )
}

export default Help
Help.Layout = 'Profile'
