import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setError, setNewsList, setIndividualNews, setNewsListLoading, setIndividualNewsLoading } =
  slice.actions

const getNewsList = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setNewsListLoading(true))

    const reqBody = {
      page,
    }

    const response = await API.news.getNews(reqBody)

    dispatch(setNewsList(response.data.data))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status?.message))
  } finally {
    dispatch(setNewsListLoading(false))
  }
}

const getIndividualNewsById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIndividualNewsLoading(true))

    const response = await API.news.getIndividualNews(id)

    dispatch(setIndividualNews(response.data.data))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status?.message))
  } finally {
    dispatch(setIndividualNewsLoading(false))
  }
}

export default {
  getNewsList,
  getIndividualNewsById,
}
