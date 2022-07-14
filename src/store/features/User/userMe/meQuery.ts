import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const meApi = createApi({
    reducerPath: 'meApi',
    baseQuery: fetchBaseQuery({baseUrl: API}),
    tagTypes: ['Me'],
    endpoints:(build)=>({
        fetchUserMe: build.query({
            query: ()=>({
                url: '/user/me'
            }),
            providesTags: ['Me']
        })
    })
})