import aboutUsManager from '@axios/aboutUs/aboutUsManager'
import authManager from '@axios/authentication/authManager'
import educationalInstitutesManager from '@axios/educational-institutes/educational-institutesManager'
import eventsManager from '@axios/events/eventsManager'
import jobSeekerManager from '@axios/jobSeeker/jobSeeker'
import monitoringManager from '@axios/monitoring/monitoringManager'
import newsManager from '@axios/news/newsManager'
import organizationManager from '@axios/organization/jobSeeker'
import supportManager from '@axios/support/supportManager'

const API = {
  news: newsManager,
  auth: authManager,
  events: eventsManager,
  support: supportManager,
  aboutUs: aboutUsManager,
  jobSeeker: jobSeekerManager,
  organization: organizationManager,
  educationalInstitutes: educationalInstitutesManager,
  monitoring: monitoringManager,
}

export default API
