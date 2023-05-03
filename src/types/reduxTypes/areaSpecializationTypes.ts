export interface IApplicationsProps {
  applications: IApplications
}

export interface IApplications {
  isJobSeekerLoading: boolean
  error: null | string

  isJobSeekerSubmitSuccess: boolean
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
