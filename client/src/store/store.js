import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import expenseSlice from './reducer'
import { api } from './api'

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
