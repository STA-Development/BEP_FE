import { IChangeNewsFormProps, ICreateNewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import API from '@axios/API'
import { newsMiddleware } from '@redux/slices/news/index'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setIndividualNews,
  setNewsListLoading,
  setIndividualNewsLoading,
  setTotalItems,
  setPageSize,
  setNewsList,
  setCreateNewsSubmitSuccess,
  setChangeNewsSubmitSuccess,
  setDeleteNewsLoading,
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

const createNews = (formData: ICreateNewsProps) => async (dispatch: AppDispatch) => {
  try {
    await API.news.createNews(formData)

    dispatch(setCreateNewsSubmitSuccess(true))
  } catch (error) {
    /* empty */
  }
}

const changeNews = (formData: IChangeNewsFormProps) => async (dispatch: AppDispatch) => {
  try {
    await API.news.changeNews(formData)

    dispatch(setChangeNewsSubmitSuccess(true))
  } catch (error) {
    /* empty */
  }
}

const clearNewsList = () => async (dispatch: AppDispatch) => {
  dispatch(setNewsList([]))
  dispatch(setPageSize(0))
  dispatch(setTotalItems(0))
}

const resetCreateNewsSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setCreateNewsSubmitSuccess(false))
}

const resetChangeNewsSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setChangeNewsSubmitSuccess(false))
}

const deleteIndividualNews = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setDeleteNewsLoading(true))

    await API.news.deleteIndividualNews(uuid)

    dispatch(clearNewsList())

    dispatch(newsMiddleware.getNewsList(1))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setDeleteNewsLoading(false))
  }
}

export default {
  getNewsList,
  clearNewsList,
  getIndividualNewsById,
  createNews,
  changeNews,
  resetCreateNewsSubmitSuccess,
  resetChangeNewsSubmitSuccess,
  deleteIndividualNews,
}
