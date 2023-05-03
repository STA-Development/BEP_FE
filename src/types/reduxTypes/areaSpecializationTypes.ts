export interface IApplicationsProps {
  applications: IApplicationsList
}

export interface IApplicationsList {
  jobSeeker: IJobSeeker
  organization: IOrganization
}

export interface IJobSeeker {
  isJobSeekerLoading: boolean
  error: null | string

  isJobSeekerSubmitSuccess: boolean
}

export interface IOrganization {
  isOrganizationLoading: boolean
  error: null | string
  isOrganizationSubmitSuccess: boolean
}

export interface IJobSeekerProps {
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

export interface IOrganizationProps {
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
