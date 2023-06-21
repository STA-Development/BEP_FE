import { IMonitoringProps } from '@allTypes/reduxTypes/monitoringStateTypes'

export const getInitialState = (): IMonitoringProps => ({
  monitoringEnums: null,
  isMonitoringEnumsLoading: false,
  error: null,
})
