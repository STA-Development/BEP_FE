import { Middleware } from '@reduxjs/toolkit'
import educationalInstitutesManager from 'src/manager/core/educational-institutes/educational-institutesManager'

import { setPage } from './slice'

const educationalInstitutesMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === setPage.type) {
      const { page } = action.payload

      educationalInstitutesManager
        .educationalInstitutes({ page })
        .then((response) => {
          dispatch(setPage(response.data.page))
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return next(action)
  }

export default educationalInstitutesMiddleware
