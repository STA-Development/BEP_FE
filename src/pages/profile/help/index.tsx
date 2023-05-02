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
  const isHelpDataSubmittedSuccess = useAppSelector(supportSelector.isHelpDataSubmittedSuccess)

  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(helpValidationSchema),
  })

  const { handleSubmit, reset } = methods
  const onSubmit = (data: IHelpDataProps) => {
    dispatch(
      supportMiddleware.sendHelpData({
        headline: data.headline,
        problem: data.problem,
      })
    )
  }

  useEffect(() => {
    if (isHelpDataSubmittedSuccess) {
      reset({ ...defaultValues })
      dispatch(supportMiddleware.resetHelpSubmitDataSuccess())
    }
  }, [isHelpDataSubmittedSuccess, reset])

  return (
    <div className="grid gap-4 rounded bg-gray-thin p-5 xl:p-10">
      <h2 className="text-lg">{t(Translation.PAGE_PROFILE_MENU_HELP_TEL_PROBLEM)}</h2>
      <p className="text-base text-black-light">{t(Translation.PAGE_PROFILE_MENU_HELP_TEXT)}</p>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full text-center"
        >
          <div className="mb-5">
            <TextField
              fieldName="headline"
              placeholder={t(Translation.PAGE_PROFILE_MENU_HELP_HEADLINE) as string}
            />
          </div>
          <div className="mb-5">
            <TextField
              fieldName="problem"
              rows={7}
              placeholder={t(Translation.PAGE_PROFILE_MENU_HELP_PROBLEM) as string}
            />
          </div>
          <div className="w-full">
            <Button
              size="fl"
              type="submit"
            >
              {t(Translation.PAGE_PROFILE_MENU_HELP_ACTIONS_SUBMIT)}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Help
Help.Layout = 'Profile'
