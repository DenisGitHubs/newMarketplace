
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "Advs", id: "LIST" };
export const ads = createApi({
    reducerPath: 'ads',
    tagTypes: ['dataAds'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => 'ads',
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        addAdsWithoutImg: build.mutation({
            query: ({access, title, description, price}) => ({
                url: `adstext`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
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
    })
})

export const {useGetAllAdsQuery, useAddAdsWithoutImgMutation} = ads

// 'content-type': 'multipart/form-data',