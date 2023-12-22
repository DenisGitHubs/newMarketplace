import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "myAdvs", id: "LIST" };
export const myAds = createApi({
    reducerPath: 'myAds',
    tagTypes: ['myAds'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8090/'}),
    endpoints: (build) => ({
        getAllMyAds: build.query({
                query: (access) => ({
                  url: `ads/me`,
                  method: 'GET',
                  headers: {
                    'content-type': 'application/json',
                    Authorization: `bearer ${access}`,
                  },
                }),
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
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
      addImgs: build.mutation({
        query: ({access, advID, formDataFile}) => ({
            url: `ads/${advID}/image`,
            method: 'POST',
            headers: {
                Authorization: `bearer ${access}`,
            },
            body: formDataFile,
        }),
        invalidatesTags: [DATA_TAG]
    }),
      deleteAdv: build.mutation({
        query: ({access, id }) => ({
            url: `ads/${id}`,
            method: 'DELETE',
            headers: {
                Authorization: `bearer ${access}`,
            },
        }),
        invalidatesTags: [DATA_TAG]
    }),
    })
})

export const {useGetAllMyAdsQuery, useAddAdsWithoutImgMutation, useAddImgsMutation, useDeleteAdvMutation, useGetAllAdsQuery} = myAds