export enum FormValues {
  OTHER = 'Other',
}

export const defaultValues = {
  demandingProfessions: [{ value: '', count: null }],
  targetProfession: [{ value: '', count: null }],
  hasStudentsOrPractitioner: 'false',
  hasFiredWorkers: 'false',
  hasNewEmployees: 'false',
  hadDifficultiesWithVacancies: 'false',
  newEmployeePosition: [{ value: '', count: null }],
  difficultVacancies: [''],
  haveVacancies: 'false',
  vacancy: [{ value: '', count: null }],
  vacancyData: [{ name: '', education: '', count: null, startDate: null }],
  positionCuts: [{ value: '', count: null }],
  additionalPositions: [{ value: '', count: null }],
  plannedPositions: [{ value: '', count: null }],
  businessPerspective: [{ fieldName: '', value: false }],
  positionNecessityReason: [{ fieldName: '', value: false }],
}
