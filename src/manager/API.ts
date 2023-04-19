import authManager from '@axios/authentication/authManager'
import eventsManager from '@axios/events/eventsManager'
import exampleManager from '@axios/example/exampleManager'
import supportManager from '@axios/support/supportManager'

const API = {
  example: exampleManager,
  auth: authManager,
  events: eventsManager,
  support: supportManager,
}

export default API
