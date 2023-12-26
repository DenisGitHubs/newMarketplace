import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { host } from '../../Api/host'
const DATA_TAG = { type: 'Adv', id: 'LIST'}


export const advId = createApi({
    reducerPath: 'adv',
    tagTypes: ['AdvId'],
    baseQuery: fetchBaseQuery({baseUrl: `${host}/`}),
    endpoints: (build) => ({
        getAdvID: build.query({
            query: (id_adv) => `ads/${id_adv}`,
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        deleteImg: build.mutation({
            query: ({access, id, urlImg }) => ({
                url: `ads/${id}/image?file_url=${urlImg}`,
                method: 'DELETE',
                headers: {
                    Authorization: `bearer ${access}`,
                },
            }),
            invalidatesTags: [DATA_TAG]
        }),
        changeAdsText: build.mutation({
            query: ({access, id, title, description, price}) => ({
                url: `ads/${id}`,
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                    Authorization: `bearer ${access}`,
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                  }),
            }),
            invalidatesTags: [DATA_TAG]
        }),
        addChangeImgs: build.mutation({
            query: ({access, id, formDataFile}) => ({
                url: `ads/${id}/image`,
                method: 'POST',
                headers: {
                    Authorization: `bearer ${access}`,
                },
                body: formDataFile,
            }),
            invalidatesTags: [DATA_TAG]
        }),
    })
})
export const {useGetAdvIDQuery, useDeleteImgMutation, useChangeAdsTextMutation, useAddChangeImgsMutation} = advId