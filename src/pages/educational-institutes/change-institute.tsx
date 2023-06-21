import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  IChangeEducationalInstituteFormDataProps,
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
import { Loading } from '@uiComponents/Loading'
import { changeEducationalInstitutionValidationSchema } from '@validation/educationalInstitution/educationalInstitutionValidationSchema'
import { useRouter } from 'next/router'

import { useCreateObjectFromArray, useCreateObjectFromEnum } from '@hooks/EducationalInstitution'
import { useMultipleImageUpload } from '@hooks/MultipleImageLoader'

const ChangeEducationalInstitutes = () => {
  const { imageLoaded, setImageLoaded, changeMultipleFiles } = useMultipleImageUpload()

  const isIndividualEduInstitutesLoading = useAppSelector(
    educationalInstitutesSelector.isIndividualEduInstituteLoading
  )
  const individualEduInstitutes = useAppSelector(
    educationalInstitutesSelector.individualEduInstitute
  )

  const provinces = useAppSelector(educationalInstitutesSelector.provinces)

  const { objectFromArrayFields } = useCreateObjectFromArray(provinces)

  const { objectFromEnumFields } = useCreateObjectFromEnum(NewsType)

  const defaultValues: ICreateEducationalInstituteProps = useMemo(
    () => ({
      name: individualEduInstitutes?.name ?? '',
      address: individualEduInstitutes?.address ?? '',
      type:
        objectFromEnumFields.find((item) => item.name === individualEduInstitutes?.type) ?? null,
      province:
        objectFromArrayFields.find((item) => item.name === individualEduInstitutes?.province) ??
        null,
      phone: individualEduInstitutes?.phone ?? '',
      email: individualEduInstitutes?.email ?? '',
      subtitle: individualEduInstitutes?.subtitle ?? '',
      rector: individualEduInstitutes?.rector ?? '',
      studentQuantity: individualEduInstitutes?.studentQuantity ?? '',
      lecturerQuantity: individualEduInstitutes?.lecturerQuantity ?? '',
      startTime: individualEduInstitutes?.startTime ?? '',
      endTime: individualEduInstitutes?.endTime ?? '',
      description: individualEduInstitutes?.description ?? '',
      imageURLs: [],
    }),
    //   eslint-disable-next-line react-hooks/exhaustive-deps
    [individualEduInstitutes]
  )

  const router = useRouter()

  const instituteId = router.query.path

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(changeEducationalInstitutionValidationSchema),
    mode: 'onSubmit',
  })

  const { handleSubmit, reset, getValues, setValue } = methods

  const images = imageLoaded.length ? imageLoaded : individualEduInstitutes?.imageURLs

  const onSubmit = (data: ICreateEducationalInstituteProps) => {
    const { imageURLs, ...params } = data

    const payload = {
      ...params,
      province: data.province?.name,
      type: data.type?.name,
      ...imageURLs,
    }

    const instituteForm = {
      payload,
      uuid: instituteId,
    }

    dispatch(
      educationalInstitutesMiddleware.changeEducationalInstitutes(
        instituteForm as IChangeEducationalInstituteFormDataProps
      )
    )
  }

  const onRemove = (index: number) => {
    const fieldValues = getValues('imageURLs')

    if (fieldValues && Array.isArray(fieldValues)) {
      const updatedField = fieldValues.filter((item, i) => i !== index)

      setValue('imageURLs', updatedField)
    }

    setImageLoaded(imageLoaded.filter((item, imageIndex) => imageIndex !== index))
  }

  useEffect(() => {
    if (instituteId) {
      dispatch(
        educationalInstitutesMiddleware.getIndividualEducationalInstitutesById(
          instituteId as string
        )
      )
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instituteId])

  useEffect(() => {
    reset(defaultValues)
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [individualEduInstitutes])

  useEffect(() => {
    dispatch(educationalInstitutesMiddleware.getProvince())
  }, [])

  return (
    <div className="grid w-full rounded bg-gray-thin p-5 xl:p-10">
      {isIndividualEduInstitutesLoading ? (
        <Loading />
      ) : (
        <FormProvider {...methods}>
          <div className="w-full">
            {images ? (
              <MultipleImageLoader
                imageLoaded={images}
                onRemove={onRemove}
                length={imageLoaded.length}
              />
            ) : null}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-center"
          >
            <EducationalInstitutesForm
              changeMultipleFiles={changeMultipleFiles}
              imageLoaded={imageLoaded}
            />
          </form>
        </FormProvider>
      )}
    </div>
  )
}

export default ChangeEducationalInstitutes
