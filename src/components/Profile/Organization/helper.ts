import { IAutoCompleteItem } from '@uiComponents/Autocomplete'

export interface IOrganizationProfile {
  name: string
  email: string
  phone: string
  password: string
  address: string
  employeeQuantity: number
  organizationType: keyof typeof OrganizationType | null
}

export enum OrganizationType {
  SoleProprietorship = 'SoleProprietorship',
  GeneralPartnership = 'GeneralPartnership',
  LimitedPartnership = 'LimitedPartnership',
  LimitedLiabilityPartnership = 'LimitedLiabilityPartnership',
  NonProfit = 'NonProfit',
}

export const organizationTypeOptions = [
  { id: '1', name: 'SoleProprietorship' },
  { id: '2', name: 'GeneralPartnership' },
  { id: '3', name: 'LimitedPartnership' },
  { id: '4', name: 'LimitedLiabilityPartnership' },
  { id: '5', name: 'NonProfit' },
]

export interface IOrganizationProfileForm {
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
  address: {
    value: string
    active: boolean
  }
  employeeQuantity: {
    value: number
    active: boolean
  }
  organizationType: {
    value: IAutoCompleteItem
    active: boolean
  }
}

export const defaultValues = (values: IOrganizationProfile) => ({
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
  address: {
    value: values.address,
    active: false,
  },
  employeeQuantity: {
    value: values.employeeQuantity,
    active: false,
  },
  organizationType: {
    value: organizationTypeOptions.find((item) => item.name === values.organizationType),
    active: false,
  },
})

export const resetValues = (values: IOrganizationProfileForm) => ({
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
  address: {
    value: values.address.value,
    active: false,
  },
  employeeQuantity: {
    value: values.employeeQuantity.value,
    active: false,
  },
  organizationType: {
    value: values.organizationType.value?.name
      ? organizationTypeOptions.find((item) => item.name === values.organizationType.value?.name)
      : { id: '', name: '' },
    active: false,
  },
})
