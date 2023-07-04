export interface IMonitoringProps {
  monitoringEnums: IMonitoringEnums | null
  isMonitoringEnumsLoading: boolean
  error: Error | null | string
  isMonitoringStudentLoading: boolean
  monitoringStudent: IMonitoringStudentResponse[]
}

export interface IMonitoringStudentListParams {
  key?: string
  values?: number[]
}

export interface IMonitoringStudentResponse {
  uuid: string
  educationLevel: string
  sexAtBirth: string
  year: number
  count: number
  percentage: number
}

export interface IOrganizationType {
  id: string
  name: string
}

export interface IWorkAreas {
  id: string
  name: string
}

export interface IProvinces {
  id: string
  name: string
}

export interface IGender {
  id: string
  name: string
}

export interface IEmploymentMeans {
  id: string
  name: string
}

export interface IPrimaryReason {
  id: string
  name: string
}

export interface IFiringReason {
  id: string
  name: string
}

export interface IAgeRange {
  id: string
  name: string
}

export interface IActivityPeriod {
  id: string
  name: string
}

export interface IWorkChallengeAffects {
  id: string
  name: string
}

export interface IVacancyFields {
  id: string
  name: string
}

export interface ITrainingPeriod {
  id: string
  name: string
}

export interface IProfessionQualificationEvaluation {
  id: string
  name: string
}

export interface IPositionNecessityReason {
  id: string
  name: string
}

export interface IBusinessPerspective {
  id: string
  name: string
}

export interface INonFinancialSupportExpectations {
  id: string
  name: string
}

export interface IProfessionalPracticalEducationExpectations {
  id: string
  name: string
}

export interface IPracticeDetailedDescription {
  id: string
  name: string
}

export interface IMasterBonusSalary {
  id: string
  name: string
}

export interface IStudentPracticeSalary {
  id: string
  name: string
}

export interface IPracticePayer {
  id: string
  name: string
}

export interface IQualifications {
  id: string
  name: string
}

export interface IImportance {
  id: string
  name: string
}

export interface IPracticeDuration {
  id: string
  name: string
}

export interface IProfessionalEducationCooperation {
  id: string
  name: string
}

export interface IPracticeLocation {
  id: string
  name: string
}

export interface IPositiveSidesOfEducation {
  id: string
  name: string
}

export interface INegativeSidesOfEducation {
  id: string
  name: string
}

export interface IMonitoringEnums {
  organizationType: IOrganizationType[]
  workAreas: IWorkAreas[]
  provinces: IProvinces[]
  gender: IGender[]
  employmentMeans: IEmploymentMeans[]
  primaryReason: IPrimaryReason[]
  firingReason: IFiringReason[]
  ageRange: IAgeRange[]
  activityPeriod: IActivityPeriod[]
  workChallengeAffects: IWorkChallengeAffects[]
  vacancyFields: IVacancyFields[]
  trainingPeriod: ITrainingPeriod[]
  professionQualificationEvaluation: IProfessionQualificationEvaluation[]
  positionNecessityReason: IPositionNecessityReason[]
  businessPerspective: IBusinessPerspective[]
  nonFinancialSupportExpectations: INonFinancialSupportExpectations[]
  professionalPracticalEducationExpectations: IProfessionalPracticalEducationExpectations[]
  practiceDetailedDescription: IPracticeDetailedDescription[]
  masterBonusSalary: IMasterBonusSalary[]
  studentPracticeSalary: IStudentPracticeSalary[]
  practicePayer: IPracticePayer[]
  qualifications: IQualifications[]
  importance: IImportance[]
  practiceDuration: IPracticeDuration[]
  professionalEducationCooperation: IProfessionalEducationCooperation[]
  practiceLocation: IPracticeLocation[]
  positiveSidesOfEducation: IPositiveSidesOfEducation[]
  negativeSidesOfEducation: INegativeSidesOfEducation[]
}
