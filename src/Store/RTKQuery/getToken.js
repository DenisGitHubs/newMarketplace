import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "dataToken", id: "LIST" };
export const host = "http://127.0.0.1:8090";
let access = localStorage.getItem('access')
let refresh = localStorage.getItem('refresh')
let email = localStorage.getItem('email')

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
            providesTags: (result = []) => [
                DATA_TAG,
            ],
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

// export const newToken = createApi({
//     reducerPath: 'token',
//     tagTypes: ['dataToken'],
//     baseQuery: fetchBaseQuery({baseUrl: `${host}`}),
//     endpoints: (build) => ({
//         getNewToken: build.query({
//             query: (dispatch) => ({
//                 url: `/auth/login`,
//                 method: 'PUT',
//                 headers: {
//                     "content-type": "application/json",
//                     Authorization: `bearer ${access}`,
//                 },
//                 body: JSON.stringify({
//                     access_token: access,
//                     refresh_token: refresh,
//                 }),

//             }),
//             async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//                 const result = await queryFulfilled
//                 dispatch(saveTokenUserAfterSignIn({data}))
//             },
//             providesTags: (result = []) => [
//                 DATA_TAG,
//             ],
//         }),
//         changeMe: build.mutation({
//             query: (access) => ({
//                 url: `me`,
//                 method: 'POST',
//                 headers: access,
//             }),
//             invalidatesTags: [DATA_TAG]
//         }),
//     })
// })
// export const { useGetNewTokenQuery } = newToken