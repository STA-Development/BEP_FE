/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export interface IAction<P> extends Action<string> {
  payload: P
}

type SliceReducer<S, A> = (s: S, action: A) => any | ((s: S) => any)
// TODO: need accurate type definition for this
export interface SliceReducers<S> {
  [key: string]: SliceReducer<S, IAction<any>>
}
