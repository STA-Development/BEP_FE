export interface IApplicationsProps {
  applications: IApplications
}

export interface IApplications {
  isJobSeekerLoading: boolean
  error: null | string

  isJobSeekerSubmitSuccess: boolean
}

export interface IJobSeekerApplicationProps {
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

export interface IJobSeekerProps {
  uuid: string
  name: string
  address: string
  phone: string
  imageURL: string
  email: string
}

export interface IOrganizationProps {
  uuid: string
  name: string
  employeeQuantity: number
  organizationType: string
  address: string
}
