import React, { useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ICreateNewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import { Container } from '@components/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'
import { createNewsValidationSchema } from '@validation/news/createNews'
import Image from 'next/image'
import { useRouter } from 'next/router'

const defaultValues = {
  header: '',
  paragraph: '',
  imageUrl: null,
}

const CreateNews = () => {
  const [file, setFile] = useState<File | null>(null)
  const [imageLoaded, setImageLoaded] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const { isCreateNewsSubmitSuccess } = useAppSelector(newsSelector.news)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createNewsValidationSchema),
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0]

    setFile(fileObj)

    if (fileObj) {
      const objectUrl = URL.createObjectURL(fileObj)

      setImageLoaded(objectUrl)
    }
  }
  const onSubmit = (data: ICreateNewsProps) => {
    dispatch(newsMiddleware.createNews(data))
  }

  useEffect(() => {
    if (isCreateNewsSubmitSuccess) {
      reset(defaultValues)
      router.push('/news')
      dispatch(newsMiddleware.resetCreateNewsSubmitSuccess())
    }
  }, [isCreateNewsSubmitSuccess, reset, router])

  return (
    <Container className="mb-30 mt-15 pb-20">
      <div className="mx-auto flex w-full w-full flex-col items-center justify-center space-y-3 xl:w-[720px]">
        <div>
          {file && (
            <div>
              {!imageLoaded ? (
                <div>Loading...</div>
              ) : (
                <Image
                  src={imageLoaded}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                  alt="image"
                  width={400}
                  height={280}
                />
              )}
            </div>
          )}
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col items-center space-y-3">
              <div className="w-full">
                <TextField
                  fieldName="imageUrl"
                  inputRef={inputRef}
                  type="file"
                  handleFileChange={handleFileChange}
                />
                <Button
                  size="lg"
                  variant="outlined"
                  type="button"
                  onClick={handleClick}
                >
                  Upload Image
                </Button>
              </div>
              <div className="w-full">
                <p>Header</p>
                <TextField fieldName="header" />
              </div>
              <div className="w-full">
                <p>paragraph</p>
                <TextField
                  fieldName="paragraph"
                  rows={7}
                />
              </div>
              <Button
                size="fl"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Container>
  )
}

export default CreateNews
