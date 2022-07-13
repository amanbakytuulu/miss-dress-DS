import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../../../../hooks/api";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    tagTypes: ['Category'],
    endpoints:(build)=>({
        fetchCategory: build.query({
            query: ()=>({
                url: '/category'
            }),
            providesTags: ['Category']
        })
    })
})