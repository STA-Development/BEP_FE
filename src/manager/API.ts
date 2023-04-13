import authManager from '@axios/authentication/authManager'
import eventsManager from '@axios/events/authManager'
import exampleManager from '@axios/example/exampleManager'

const API = {
  example: exampleManager,
  auth: authManager,
  events: eventsManager,
}

export default API
