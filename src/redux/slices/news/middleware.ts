import API from '@axios/API'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setIndividualNews,
  setNewsListLoading,
  setIndividualNewsLoading,
  setTotalItems,
  setPageSize,
  setNewsList,
} = slice.actions

const getNewsList = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setNewsListLoading(true))

    const reqBody = {
      page,
    }

    const response = await API.news.getNews(reqBody)

    const responseData = response.data

    const { newsList } = store.getState().news.news

    dispatch(setNewsList([...newsList, ...responseData.data]))
    dispatch(setTotalItems(responseData.totalItems))
    dispatch(setPageSize(responseData.pageSize))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setNewsListLoading(false))
  }
}

const getIndividualNewsById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIndividualNewsLoading(true))

    const response = await API.news.getIndividualNews(id)

    dispatch(setIndividualNews(response.data.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setIndividualNewsLoading(false))
  }
}

const clearNewsList = () => async (dispatch: AppDispatch) => {
  dispatch(setNewsList([]))
  dispatch(setPageSize(0))
  dispatch(setTotalItems(0))
}

export default {
  getNewsList,
  clearNewsList,
  getIndividualNewsById,
}
