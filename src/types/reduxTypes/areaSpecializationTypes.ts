import { OrganizationType } from '@components/Profile/Organization/helper'
import { IAutoCompleteItem } from '@uiComponents/Autocomplete'

export interface IApplicationsProps {
  applications: IApplications
}

export interface IApplications {
  isJobSeekerLoading: boolean
  error: null | string

  isApplicationLoading: boolean
  isJobSeekerSubmitSuccess: boolean
  applicationsList: null | IApplicationsListProps[]
  individualApplication: null | IIndividualApplication
  isOrganizationLoading: boolean
  isOrganizationSubmitSuccess: boolean
}

export interface IJobSeekerApplicationProps {
  type: string
  area: string
  educationLevel: string
  experience: string
  schedule: string
  workplace: string
  expectedSalary: string
}

export interface IOrganizationApplicationForm {
  type: IAutoCompleteItem
  area: IAutoCompleteItem
  educationLevel: IAutoCompleteItem
  experience: IAutoCompleteItem
  schedule: IAutoCompleteItem
  workplace: IAutoCompleteItem
  expectedSalary: IAutoCompleteItem
}

export interface IOrganizationApplicationProps {
  uuid?: string
  type?: string
  area?: string
  educationLevel?: string
  experience?: string
  schedule?: string
  workplace?: string
  expectedSalary?: string
}

export interface IJobSeekerProps {
  uuid: string
  name: string
  address: string
  phone: string
  imageURL: string
  email: string
}

export interface IProfileUpdateProps {
  keyValuePair: IKeyValuePair
}

export interface IKeyValuePair {
  key: string
  value: string
}

export interface IOrganizationProps {
  uuid: string
  name: string
  employeeQuantity: number
  organizationType: keyof typeof OrganizationType
  address: string
}

export interface IApplicationsListProps {
  isActive: boolean
  percentCompleted: number
  postedAt: string
  status: string
  uuid: string
}

export interface IIndividualApplication {
  uuid?: string
  type: string
  area: string
  educationLevel: string
  experience: string
  schedule: string
  workplace: string
  expectedSalary: string
  isActive?: boolean
  postedAt?: string
  status?: string
}
