export interface IJobSeekerProfile {
  name: string
  email: string
  phone: string
  password: string
}

export interface IJobSeekerProfileForm {
  name: {
    value: string
    active: boolean
  }
  email: {
    value: string
    active: boolean
  }
  phone: {
    value: string
    active: boolean
  }
  password: {
    value: string
    active: boolean
  }
}

export const defaultValues = (values: IJobSeekerProfile) => ({
  name: {
    value: values.name,
    active: false,
  },
  email: {
    value: values.email,
    active: false,
  },
  phone: {
    value: values.phone,
    active: false,
  },
  password: {
    value: values.password,
    active: false,
  },
})

export const resetValues = (values: IJobSeekerProfileForm) => ({
  name: {
    value: values.name.value,
    active: false,
  },
  email: {
    value: values.email.value,
    active: false,
  },
  phone: {
    value: values.phone.value,
    active: false,
  },
  password: {
    value: values.password.value,
    active: false,
  },
})
