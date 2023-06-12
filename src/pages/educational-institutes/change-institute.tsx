import React, { useEffect, useMemo } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import {
  IChangeEducationalInstituteFormDataProps,
  ICreateEducationalInstituteAutocompleteField,
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
import { Loading } from '@uiComponents/Loading'
import { changeEducationalInstitutionValidationSchema } from '@validation/educationalInstitution/educationalInstitutionValidationSchema'
import { useRouter } from 'next/router'

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

  const provincesTypes: ICreateEducationalInstituteAutocompleteField[] = useMemo(
    () => provinces.map((item, index) => ({ name: item, id: index.toString() })),
    [provinces]
  )

  const defaultValues: ICreateEducationalInstituteProps = useMemo(
    () => ({
      name: individualEduInstitutes?.name ?? '',
      address: individualEduInstitutes?.address ?? '',
      type:
        EducationalInstitutionTypes.find((item) => item.name === individualEduInstitutes?.type) ??
        EducationalInstitutionTypes[0],
      province:
        provincesTypes.find((item) => item.name === individualEduInstitutes?.province) ??
        provincesTypes[10],
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

  const { handleSubmit, control, reset } = methods

  const { remove } = useFieldArray({ control, name: 'imageURLs' })
  const images = imageLoaded.length ? imageLoaded : individualEduInstitutes?.imageURLs

  const onSubmit = (data: ICreateEducationalInstituteProps) => {
    const payload = {
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
    remove(index)
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
              provincesTypes={provincesTypes}
            />
          </form>
        </FormProvider>
      )}
    </div>
  )
}

export default ChangeEducationalInstitutes
