import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { AboutUsForm } from '@components/AboutUs/AboutUsForm/AboutUsForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'
import { createAboutUsValidationSchema } from '@validation/aboutUs/aboutUs'

export interface IAboutUsMemberProps {
  setShowPersonForm: (value: boolean) => void
}

const defaultValues = {
  header: '',
  paragraph: '',
  imageDescription: '',
  imageURL: null ?? '',
}
const AboutUsMember = ({ setShowPersonForm }: IAboutUsMemberProps) => {
  const { isTeamMemberSubmitSuccess } = useAppSelector(aboutUsSelector.aboutUs)

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createAboutUsValidationSchema),
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: ICreateTeamMember) => {
    dispatch(aboutUsMiddleware.createTeamMember(data))
  }

  useEffect(() => {
    if (isTeamMemberSubmitSuccess) {
      dispatch(aboutUsMiddleware.resetCreateTeamMemberSubmitSuccess())
      setShowPersonForm(false)
      reset(defaultValues)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTeamMemberSubmitSuccess])

  return (
    <div className="xl:px-30">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <AboutUsForm />
        </form>
      </FormProvider>
    </div>
  )
}

export default AboutUsMember
