import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  ICreateEducationalInstituteFormDataProps,
  ICreateEducationalInstituteProps,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
import { NewsType } from '@axios/news/newsManagerTypes'
import { EducationalInstitutesForm } from '@components/Admin/EducationalInstitutesForm'
import MultipleImageLoader from '@components/Educationalnstitutes/MultipleImageLoader'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from '@redux/slices/educational-instutions'
import { educationalInstitutionValidationSchema } from '@validation/educationalInstitution/educationalInstitution'

import { useCreateObjectFromArray, useCreateObjectFromEnum } from '@hooks/EducationalInstitution'
import { useMultipleImageUpload } from '@hooks/MultipleImageLoader'

const CreateEducationalInstitutes = () => {
  const { imageLoaded, setImageLoaded, changeMultipleFiles } = useMultipleImageUpload()

  const provinces = useAppSelector(educationalInstitutesSelector.provinces)

  const { objectFromArrayFields } = useCreateObjectFromArray(provinces)

  const { objectFromEnumFields } = useCreateObjectFromEnum(NewsType)

  const defaultValues: ICreateEducationalInstituteProps = useMemo(
    () => ({
      name: '',
      address: '',
      type: null,
      province: null,
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
    }),
    //   eslint-disable-next-line react-hooks/exhaustive-deps
    [objectFromArrayFields, objectFromEnumFields]
  )

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(educationalInstitutionValidationSchema),
    mode: 'onSubmit',
  })

  const { handleSubmit, reset, setValue, getValues } = methods

  const onRemove = (index: number) => {
    const fieldValues = getValues('imageURLs')

    if (fieldValues && Array.isArray(fieldValues)) {
      const updatedField = fieldValues.filter((item, i) => i !== index)

      setValue('imageURLs', updatedField)
    }

    setImageLoaded(imageLoaded.filter((item, imageIndex) => imageIndex !== index))
  }

  const onSubmit = (data: ICreateEducationalInstituteProps) => {
    const { imageURLs, ...params } = data
    const instituteForm = {
      ...params,
      province: data.province?.name,
      type: data.type?.name,
      ...imageURLs,
    }

    dispatch(
      educationalInstitutesMiddleware.createEducationalInstitutes(
        instituteForm as ICreateEducationalInstituteFormDataProps
      )
    )
  }

  useEffect(() => {
    dispatch(educationalInstitutesMiddleware.getProvince())
  }, [])

  useEffect(() => {
    if (objectFromArrayFields) {
      reset(defaultValues)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objectFromArrayFields])

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
