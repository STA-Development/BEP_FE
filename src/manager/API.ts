import authManager from '@axios/authentication/authManager'
import eventsManager from '@axios/events/eventsManager'
import exampleManager from '@axios/example/exampleManager'
import newsManager from '@axios/news/newsManager'

const API = {
  example: exampleManager,
  news: newsManager,
  auth: authManager,
  events: eventsManager,
}

export default API
