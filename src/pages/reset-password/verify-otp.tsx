import React from 'react'
import { ChekInIcon } from '@components/Icons/CheckInIcon'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

const VerifyOtp = ({ nextPage }: { nextPage: () => void }) => (
  // const { handleSubmit, control, getValues, reset } = useForm()

  // console.log(getValues(), 'getFieldState')

  // const onSubmit = (data: IResetPasswordParams) => {
  //   console.log(data)
  //   reset({}, { keepValues: true })
  //
  //   dispatch(usersMiddleware.verifyOtp({ ...data, email: '' }))
  // }

  // const onEnterCode = (value: string) => {
  //   if (value.length === 6) {
  // router.query.tab = RouterQueryTypes.confirmPassword
  // router.push(router)
  // }
  // }
  <form>
    <div className="w-full max-w-[480px]">
      <h1 className="text-xl font-medium text-black xl:font-normal">
        The link was sent to your email
      </h1>
      <div className="mt-5 flex border-b border-gray-thin pb-5">
        <ChekInIcon className="mr-5" />
        <p className="text-base text-black-light">
          Check your inbox and click on the link for password recovery
        </p>
      </div>
      <div className="mb-5 mt-5">
        <p className="mb-5 text-base text-black-light">Didn’t get the password? Click “Resend”</p>
        <TextField
          fieldName="otp"
          placeholder="Enter Code"
          // error={fieldState.error ? fieldState.error.message : null}
        />
        {/* <Input */}
        {/*  ref={register} */}
        {/*  // error={fieldState.error ? fieldState.error.message : null} */}
        {/*  placeholder="Enter Code" */}
        {/* /> */}
      </div>
      <Button
        size="fl"
        type="button"
        onClick={nextPage}
      >
        Resend Email
      </Button>
    </div>
  </form>
)

export default VerifyOtp
