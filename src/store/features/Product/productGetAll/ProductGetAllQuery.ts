import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productGetAllApi = createApi({
    reducerPath: 'productGetAllApi',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    tagTypes: ['ProductGetAll'],
    endpoints:(build)=>({
        fetchProductGetAll: build.query({
            query: ()=>({
                url: '/product/get-all'
            }),
            providesTags: ['ProductGetAll']
        })
    })
})