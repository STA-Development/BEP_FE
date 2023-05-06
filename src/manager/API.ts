import aboutUsManager from '@axios/aboutUs/aboutUsManager'
import authManager from '@axios/authentication/authManager'
import educationalInstitutesManager from '@axios/educational-institutes/educational-institutesManager'
import eventsManager from '@axios/events/eventsManager'
import applicationsManager from '@axios/jobSeeker/jobSeeker'
import newsManager from '@axios/news/newsManager'
import supportManager from '@axios/support/supportManager'

const API = {
  news: newsManager,
  auth: authManager,
  events: eventsManager,
  support: supportManager,
  aboutUs: aboutUsManager,
  applications: applicationsManager,
  educationalInstitutes: educationalInstitutesManager,
}

export default API
