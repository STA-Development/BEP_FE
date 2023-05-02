import aboutUsManager from '@axios/aboutUs/aboutUsManager'
import authManager from '@axios/authentication/authManager'
import eventsManager from '@axios/events/eventsManager'
import jobSeekerManager from '@axios/jobSeeker/jobSeeker'
import newsManager from '@axios/news/newsManager'
import supportManager from '@axios/support/supportManager'

const API = {
  news: newsManager,
  auth: authManager,
  events: eventsManager,
  support: supportManager,
  aboutUs: aboutUsManager,
  jobSeeker: jobSeekerManager,
}

export default API
