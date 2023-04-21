import React from 'react'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

const RequestPassword = ({ nextPage }: { nextPage: () => void }) => (
  // const { formState, control, handleSubmit } = useForm()

  // console.log(formState, 'control')

  // const onSubmit = (data: IResetPasswordParams) => {
  //   dispatch(usersMiddleware.forgotPassword(data))
  //   nextTab()
  // }

  <form>
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">Forgot your password?</h1>
      <p className="mb-5 text-base text-black-light">
        Enter the email that you’ve registered with in the field below. You will receive a link for
        password recovery
      </p>
      <div className="mb-5 w-full">
        <TextField
          fieldName="email"
          placeholder="Email"
          // error={fieldState.error ? fieldState.error.message : null}
        />
      </div>
      <Button
        size="fl"
        type="button"
        onClick={nextPage}
      >
        Request password reset
      </Button>
    </div>
  </form>
)

export default RequestPassword
