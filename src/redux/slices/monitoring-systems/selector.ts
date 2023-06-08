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

const ageRange = createSelector([selector], (state) => state.monitoringEnums?.ageRange)

export default {
  monitoringEnums,
  organizationType,
  activityPeriod,
  isMonitoringEnumsLoading,
  ageRange,
}
