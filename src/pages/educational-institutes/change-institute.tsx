import React, { useEffect, useMemo, useState } from 'react'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { IImageLoader } from '@allTypes/reduxTypes/edInstitutesStateTypes'
import {
  IChangeEducationalInstituteFormDataProps,
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
import { Loading } from '@uiComponents/Loading'
import { educationalInstitutionValidationSchema } from '@validation/educationalInstitution/educationalInstitution'
import { useRouter } from 'next/router'

const ChangeEducationalInstitutes = () => {
  const [imageLoaded, setImageLoaded] = useState<IImageLoader[]>([])
  const isLoading = useAppSelector(educationalInstitutesSelector.isIndividualEduInstituteLoading)
  const individualEduInstitutes = useAppSelector(
    educationalInstitutesSelector.individualEduInstitute
  )
  const iChangeIndividualInstitutesSuccess = useAppSelector(
    educationalInstitutesSelector.iChangeIndividualInstitutesSuccess
  )

  const defaultValues = useMemo(
    () => ({
      name: individualEduInstitutes?.name ?? '',
      address: individualEduInstitutes?.address ?? '',
      type:
        EducationalInstitutionTypes.find((item) => item.name === individualEduInstitutes?.type) ??
        EducationalInstitutionTypes[0],
      province:
        province.find((item) => item.name === individualEduInstitutes?.province) ?? province[9],
      phone: individualEduInstitutes?.phone ?? '',
      email: individualEduInstitutes?.email ?? '',
      subtitle: individualEduInstitutes?.subtitle ?? '',
      rector: individualEduInstitutes?.rector ?? '',
      studentQuantity: individualEduInstitutes?.studentQuantity ?? '',
      lecturerQuantity: individualEduInstitutes?.lecturerQuantity ?? '',
      startTime: individualEduInstitutes?.startTime ?? '',
      endTime: individualEduInstitutes?.endTime ?? '',
      description: individualEduInstitutes?.description ?? '',
      imageURL: individualEduInstitutes?.imageURLs ?? null,
    }),
    [individualEduInstitutes]
  )

  const router = useRouter()

  const instituteId = router.query.path

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(educationalInstitutionValidationSchema),
    mode: 'onSubmit',
  })

  const { handleSubmit, control, reset } = methods

  // @ts-ignore
  const { remove } = useFieldArray({ control, name: 'imageURL' })
  const iamges = imageLoaded.length ? imageLoaded : individualEduInstitutes?.imageURLs

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
      ...data.imageURL,
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

  const changeMultipleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file as File)
      )

      setImageLoaded((prevImages: IImageLoader[]) => prevImages.concat(imageArray))
    }
  }

  const onRemove = (index: number) => {
    remove(index)
    setImageLoaded(imageLoaded.filter((item, i) => i !== index))
  }

  useEffect(() => {
    if (instituteId) {
      dispatch(
        educationalInstitutesMiddleware.getIndividualEducationalInstitutesById(
          instituteId as string
        )
      )
    }
  }, [instituteId])

  useEffect(() => {
    if (iChangeIndividualInstitutesSuccess) {
      dispatch(educationalInstitutesMiddleware.resetChangeIndividualInstitutesSuccess())
      reset(defaultValues)
      router.push('/educational-institutes')
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iChangeIndividualInstitutesSuccess])

  return (
    <div className="grid w-full rounded bg-gray-thin p-5 xl:p-10">
      {isLoading ? (
        <Loading />
      ) : (
        <FormProvider {...methods}>
          <div className="w-full">
            {iamges ? (
              <MultipleImageLoader
                imageLoaded={iamges}
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
