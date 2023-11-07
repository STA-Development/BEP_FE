import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  IAboutUsListProps,
  IChangeMemberFormProps,
  IChangeMemberInfoFormKey,
  IMemberFormData,
} from '@allTypes/reduxTypes/aboutUsStateTypes'
import { AboutUsForm } from '@components/AboutUs/AboutUsForm/AboutUsForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'
import { Loading } from '@uiComponents/Loading'
import { createAboutUsValidationSchema } from '@validation/aboutUs/aboutUs'

interface IChangeMemberInfoProps {
  changeMember: string | null
}

export const ChangeMemberInfo = ({ changeMember }: IChangeMemberInfoProps) => {
  const { individualMember, isIndividualMemberLoading } = useAppSelector(aboutUsSelector.aboutUs)

  const defaultValues = useMemo(
    () => ({
      header: individualMember?.header ?? '',
      paragraph: individualMember?.paragraph ?? '',
      imageDescription: individualMember?.imageDescription ?? '',
      imageURL: individualMember?.imageURL ?? '',
    }),
    [individualMember]
  )

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createAboutUsValidationSchema),
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IMemberFormData) => {
    const payload: IChangeMemberInfoFormKey = {}

    Object.keys(data).forEach((key: string) => {
      if (
        individualMember &&
        typeof data[key as keyof IMemberFormData] &&
        individualMember[key as keyof IAboutUsListProps] !== data[key as keyof IMemberFormData]
      ) {
        payload[key as keyof IMemberFormData] = data[key as keyof IMemberFormData]
      }
    })

    const formData = {
      uuid: changeMember,
      payload,
    }

    dispatch(aboutUsMiddleware.changeTeamMember(formData as IChangeMemberFormProps))
  }

  useEffect(() => {
    if (changeMember) {
      dispatch(aboutUsMiddleware.getIndividualMemberById(changeMember as string))
    }
  }, [changeMember])

  useEffect(() => {
    reset(defaultValues)
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [individualMember])

  return (
    <div>
      {isIndividualMemberLoading ? (
        <Loading />
      ) : (
        <div>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              <AboutUsForm imageURL={individualMember?.imageURL as string} />
            </form>
          </FormProvider>
        </div>
      )}
    </div>
  )
}
