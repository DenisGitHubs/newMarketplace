import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const users = createApi({
  reducerPath: 'users',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => 'user/all',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetAllUsersQuery } = users;
