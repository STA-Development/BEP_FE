import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.monitoring

const monitoringEnums = createSelector([selector], (state) => state.monitoringEnums)

const organizationType = createSelector(
  [selector],
  (state) => state.monitoringEnums?.organizationType
)

const activityPeriod = createSelector([selector], (state) => state.monitoringEnums?.activityPeriod)

const isMonitoringEnumsLoading = createSelector(
  [selector],
  (state) => state.isMonitoringEnumsLoading
)
const firingReasons = createSelector([selector], (state) => state.monitoringEnums?.firingReason)
const primaryReason = createSelector([selector], (state) => state.monitoringEnums?.primaryReason)
const employmentMeans = createSelector(
  [selector],
  (state) => state.monitoringEnums?.employmentMeans
)
const ageRange = createSelector([selector], (state) => state.monitoringEnums?.ageRange)
const workChallengeAffects = createSelector(
  [selector],
  (state) => state.monitoringEnums?.workChallengeAffects
)
const trainingPeriod = createSelector([selector], (state) => state.monitoringEnums?.trainingPeriod)
const vacancyCountByField = createSelector(
  [selector],
  (state) => state.monitoringEnums?.vacancyFields
)

export default {
  monitoringEnums,
  organizationType,
  activityPeriod,
  firingReasons,
  primaryReason,
  workChallengeAffects,
  employmentMeans,
  vacancyCountByField,
  isMonitoringEnumsLoading,
  ageRange,
  trainingPeriod,
}
