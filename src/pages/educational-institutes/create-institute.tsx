import React, { useEffect } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import {
  ICreateEducationalInstituteFormDataProps,
  ICreateEducationalInstituteProps,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
import { EducationalInstitutesForm } from '@components/Admin/EducationalInstitutesForm'
import MultipleImageLoader from '@components/Educationalnstitutes/MultipleImageLoader'
import { EducationalInstitutionTypes, province } from '@constants/applications'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from '@redux/slices/educational-instutions'
import { educationalInstitutionValidationSchema } from '@validation/educationalInstitution/educationalInstitution'
import { useRouter } from 'next/router'

import { useMultipleImageUpload } from '../../hooks/MultipleImageLoader'

const defaultValues: ICreateEducationalInstituteProps = {
  name: '',
  address: '',
  type: EducationalInstitutionTypes[0],
  province: province[9],
  phone: '',
  email: '',
  subtitle: '',
  rector: '',
  studentQuantity: '',
  lecturerQuantity: '',
  startTime: '',
  endTime: '',
  description: '',
  imageURLs: [],
}

export interface IImageLoader {
  [kay: number]: string
}

const CreateEducationalInstitutes = () => {
  const router = useRouter()
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(educationalInstitutionValidationSchema),
    mode: 'onSubmit',
  })

  const { imageLoaded, setImageLoaded, changeMultipleFiles } = useMultipleImageUpload()

  const iCreateIndividualInstitutesSuccess = useAppSelector(
    educationalInstitutesSelector.iCreateIndividualInstitutesSuccess
  )

  const { handleSubmit, control, reset } = methods

  const { remove } = useFieldArray({ control, name: 'imageURLs' })

  const onRemove = (index: number) => {
    remove(index)
    setImageLoaded(imageLoaded.filter((item, i) => i !== index))
  }

  const onSubmit = (data: ICreateEducationalInstituteProps) => {
    const instituteForm = {
      name: data.name,
      address: data.address,
      type: data.type.name,
      phone: data.phone,
      email: data.email,
      startTime: data.startTime,
      endTime: data.endTime,
      province: data.province.name,
      subtitle: data.subtitle,
      rector: data.rector,
      studentQuantity: data.studentQuantity,
      lecturerQuantity: data.lecturerQuantity,
      description: data.description,
      ...data.imageURLs,
    }

    dispatch(
      educationalInstitutesMiddleware.createEducationalInstitutes(
        instituteForm as ICreateEducationalInstituteFormDataProps
      )
    )
  }

  useEffect(() => {
    if (iCreateIndividualInstitutesSuccess) {
      dispatch(educationalInstitutesMiddleware.resetCreateIndividualInstitutesSuccess())
      reset(defaultValues)
      router.push('/educational-institutes')
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iCreateIndividualInstitutesSuccess])

  return (
    <div className="grid w-full rounded bg-gray-thin p-5 xl:p-10">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full text-center"
        >
          <MultipleImageLoader
            imageLoaded={imageLoaded}
            onRemove={onRemove}
            length={imageLoaded.length}
          />
          <EducationalInstitutesForm
            changeMultipleFiles={changeMultipleFiles}
            imageLoaded={imageLoaded}
          />
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateEducationalInstitutes
