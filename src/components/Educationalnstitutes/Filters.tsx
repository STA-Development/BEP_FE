import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  EducationalInstitutionTypes,
  filterDefaultValues,
  IFilterValues,
} from '@components/Educationalnstitutes/helper'
import { SearchIcon } from '@components/Icons/SearchIcon'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from '@redux/slices/educational-instutions'
import { Autocomplete } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'

const Filters = () => {
  const [t] = useTranslation()
  const provinces = useAppSelector(educationalInstitutesSelector.provinces)
  const filterProvinces = useMemo(
    () => provinces.map((item, index) => ({ name: item, id: index.toString() })),
    [provinces]
  )

  const filterTypes = useMemo(
    () => EducationalInstitutionTypes.map((item, index) => ({ name: item, id: index.toString() })),
    []
  )

  useEffect(() => {
    dispatch(educationalInstitutesMiddleware.getProvince())
  }, [])

  const methods = useForm<IFilterValues>({
    defaultValues: filterDefaultValues,
    mode: 'onSubmit',
  })

  const { handleSubmit } = methods

  const onSubmit = (data: IFilterValues) => {
    dispatch(educationalInstitutesMiddleware.clearInstitutesList())

    const filters = Object.keys(data)
      .map((key) => ({
        key,
        value: data[key as keyof IFilterValues].name,
      }))
      .filter((item) => !!item.value)

    dispatch(educationalInstitutesMiddleware.setEIFilters({ page: 1, filters }))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inline-grid w-full grid-cols-1 content-center xl:grid-cols-4">
          <div className="rounded-l-[10px] py-2.5 text-start text-base xl:border">
            <p className="flex justify-start xl:px-5">
              {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_TITLE)}
            </p>
          </div>
          <div className="xl:border">
            <Autocomplete
              items={filterTypes}
              fieldName="type"
              placeholder={t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_TYPE)}
              inputClasses="border-none pl-0 xl:px-5"
            />
          </div>
          <div className="xl:border">
            <Autocomplete
              fieldName="province"
              items={filterProvinces}
              placeholder={t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_PROVINCE)}
              inputClasses="border-none pl-0 xl:pl-5 text-black"
            />
          </div>
          <div className="hidden xl:block">
            <Button
              RightIcon={SearchIcon}
              radius="r"
              type="submit"
            >
              Search
            </Button>
          </div>
          <div className="mt-5 xl:hidden">
            <Button
              size="lg"
              type="submit"
              RightIcon={SearchIcon}
            >
              {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_SEARCH)}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default Filters
