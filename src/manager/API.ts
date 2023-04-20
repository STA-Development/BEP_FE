import authManager from '@axios/authentication/authManager'
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
}

export default API
