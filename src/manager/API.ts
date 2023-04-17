import authManager from '@axios/authentication/authManager'
import exampleManager from '@axios/example/exampleManager'
import newsManager from '@axios/news/newsManager'

const API = {
  example: exampleManager,
  news: newsManager,
  auth: authManager,
}

export default API
