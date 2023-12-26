import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { host } from '../../Api/host'
export const users = createApi({
  reducerPath: 'users',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${host}/`,
  }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => 'user/all',
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetAllUsersQuery } = users;
