import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { host } from '../../Api/host'
const DATA_TAG = { type: "dataToken", id: "LIST" };
let access = localStorage.getItem('access')

export const userToken = createApi({
    reducerPath: 'token',
    tagTypes: ['dataToken'],
    baseQuery: fetchBaseQuery({baseUrl: `${host}`}),
    endpoints: (build) => ({
        getTokens: build.query({
            query: (dataForGetTokens) => ({
                url: `/auth/login`,
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    Authorization: `bearer ${access}`,
                },
                body: JSON.stringify({
                    email: dataForGetTokens.email,
                    password: dataForGetTokens.password,
                }),
            }),
            providesTags: [DATA_TAG],
        }),
        getNewToken: build.mutation({
            query: ({ access, refresh }) => ({
                url: `/auth/login`,
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                    Authorization: `bearer ${access}`,
                },
                body: {
                        access_token: access,
                        refresh_token: refresh,
                    },
            }),
            invalidatesTags: [DATA_TAG]
        }),
    })
})
export const { useGetTokensQuery, useGetNewTokenMutation } = userToken