import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:8080'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURI,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/api/categories',
    }),
  }),
})

export default api
