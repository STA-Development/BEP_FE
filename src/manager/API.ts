import authManager from '@axios/authentication/authManager'
import educationalInstitutesManager from '@axios/core/educational-institutes/educational-institutesManager'
import eventsManager from '@axios/events/eventsManager'
import exampleManager from '@axios/example/exampleManager'
import newsManager from '@axios/news/newsManager'
import supportManager from '@axios/support/supportManager'

const API = {
  example: exampleManager,
  news: newsManager,
  auth: authManager,
  events: eventsManager,
  support: supportManager,
  edu: educationalInstitutesManager,
}

export default API
