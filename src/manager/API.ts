import aboutUsManager from '@axios/aboutUs/aboutUsManager'
import authManager from '@axios/authentication/authManager'
import educationalInstitutesManager from '@axios/core/educational-institutes/educational-institutesManager'
import eventsManager from '@axios/events/eventsManager'
import newsManager from '@axios/news/newsManager'
import supportManager from '@axios/support/supportManager'

const API = {
  news: newsManager,
  auth: authManager,
  events: eventsManager,
  support: supportManager,
  aboutUs: aboutUsManager,
  edu: educationalInstitutesManager,
}

export default API
