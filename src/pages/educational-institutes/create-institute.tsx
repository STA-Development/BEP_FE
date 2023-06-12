import React, { useEffect, useMemo } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import {
  ICreateEducationalInstituteAutocompleteField,
  ICreateEducationalInstituteFormDataProps,
  ICreateEducationalInstituteProps,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
import { EducationalInstitutesForm } from '@components/Admin/EducationalInstitutesForm'
import MultipleImageLoader from '@components/Educationalnstitutes/MultipleImageLoader'
import { EducationalInstitutionTypes } from '@constants/applications'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from '@redux/slices/educational-instutions'
import { educationalInstitutionValidationSchema } from '@validation/educationalInstitution/educationalInstitution'

import { useMultipleImageUpload } from '@hooks/MultipleImageLoader'

const CreateEducationalInstitutes = () => {
  const { imageLoaded, setImageLoaded, changeMultipleFiles } = useMultipleImageUpload()

  const provinces = useAppSelector(educationalInstitutesSelector.provinces)

  const provincesTypes: ICreateEducationalInstituteAutocompleteField[] = useMemo(
    () => provinces.map((item, index) => ({ name: item, id: index.toString() })),
    [provinces]
  )

  const defaultValues: ICreateEducationalInstituteProps = useMemo(
    () => ({
      name: '',
      address: '',
      type: EducationalInstitutionTypes[0],
      province: provincesTypes[10],
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
    [provincesTypes, provinces]
  )

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(educationalInstitutionValidationSchema),
    mode: 'onSubmit',
  })

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
    dispatch(educationalInstitutesMiddleware.getProvince())
  }, [])

  useEffect(() => {
    if (provincesTypes) {
      reset(defaultValues)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provincesTypes])

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
            provincesTypes={provincesTypes}
          />
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateEducationalInstitutes
