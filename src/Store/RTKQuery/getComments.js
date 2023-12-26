import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { host } from '../../Api/host'
const DATA_TAG = { type: "Commets", id: "LIST" };
export const comments = createApi({
    reducerPath: 'comments',
    tagTypes: ['dataComments'],
    baseQuery: fetchBaseQuery({baseUrl: `${host}/ads/`}),
    endpoints: (build) => ({
        getComments: build.query({
          query: (idProduct) => ({
            url: `${idProduct}/comments`,
            method: 'GET',
            headers: {
              'content-type': 'application/json',
            },
          }),
            providesTags: ['dataComments']
        }),

        addComment: build.mutation({
          query: ({ idProduct, commentText, access }) => ({
            url: `${idProduct}/comments`,
            method: 'POST',
            headers: {
              Authorization: `bearer ${access}`,
              "content-type": "application/json",
            },
            body: {
              text: commentText
            }
          }),
          invalidatesTags: ['dataComments']
        })
    })
})
export const { useGetCommentsQuery, useAddCommentMutation } = comments