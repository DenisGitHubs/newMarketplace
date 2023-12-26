
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { host } from '../../Api/host'
const DATA_TAG = { type: "Advs", id: "LIST" };
export const ads = createApi({
    reducerPath: 'ads',
    tagTypes: ['dataAds'],
    baseQuery: fetchBaseQuery({baseUrl: `${host}/`}),
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => 'ads',
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
    })
})

export const {useGetAllAdsQuery} = ads
