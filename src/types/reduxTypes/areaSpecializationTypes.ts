import { OrganizationType } from '@components/Profile/Organization/helper'
import { IAutoCompleteItem } from '@uiComponents/Autocomplete'

export interface IApplicationsProps {
  applications: IApplications
}

export interface IApplications {
  isJobSeekerLoading: boolean

  isApplicationLoading: boolean
  isJobSeekerSubmitSuccess: boolean
  applicationsList: null | IApplicationsListProps[]
  individualApplication: null | IIndividualApplication
  isOrganizationLoading: boolean
  isOrganizationSubmitSuccess: boolean
  isJobSeekerApplicationDeleteLoading: boolean
  isOrganizationApplicationDeleteLoading: boolean
  isOrganizationApplicationLoading: boolean
  isJobSeekerApplicationLoading: boolean
  applicationsPdf: null | File
  isChangeIsActiveSuccess: boolean
  isCloneApplicationSuccess: boolean
  notifications: null | INotificationsProps[]
  notificationId: string | null
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

export interface IDeactivateApplicationProps {
  uuid: string
  isActive: boolean
}

export interface INotificationsProps {
  name: string
  applicationUuid: string
}

export interface IUsersList {
  address?: string
  canDeactivate: boolean
  email: string
  imageURL: string | null
  name: string
  role: string
  uuid: string
}

export interface IDeactivateUserProps {
  uuid: string
  params: IFilterUserListProps
}

export interface IFilterUserListProps {
  page: number
  key?: string
  value?: string
}
