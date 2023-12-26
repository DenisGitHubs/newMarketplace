import { host } from '../../Api/host'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const DATA_TAG = { type: 'dataMe', id: 'LIST' };

export const me = createApi({
  reducerPath: 'me',
  tagTypes: ['dataMe'],
  baseQuery: fetchBaseQuery({ baseUrl: `${host}/` }),
  endpoints: (build) => ({
    getMe: build.query({
      query: (access) => ({
        url: `user`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `bearer ${access}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
    changeMe: build.mutation({
      query: (dataChangeMe) => ({
        url: `user`,
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          Authorization: `bearer ${dataChangeMe.access}`,
        },
        body: JSON.stringify({
            role: 'user',
            email: dataChangeMe.email,
            name: dataChangeMe.userName,
            surname: dataChangeMe.surname,
            phone: dataChangeMe.phone,
            city: dataChangeMe.city,
        }),
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
});
export const { useGetMeQuery, useChangeMeMutation } = me;

