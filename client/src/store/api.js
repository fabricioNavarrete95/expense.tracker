import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:8080'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURI,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/api/categories',
      providesTags: ['categories'],
    }),
    getLabels: builder.query({
      query: () => '/api/labels',
      providesTags: ['transactions'],
    }),
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: '/api/transactions',
        method: 'POST',
        body: initialTransaction,
      }),
      invalidatesTags: ['transactions'],
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: `/api/transactions/${recordId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['transactions'],
    }),
  }),
})

export default api
