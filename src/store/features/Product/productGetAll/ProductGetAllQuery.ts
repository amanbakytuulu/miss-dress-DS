import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productGetAllApi = createApi({
  reducerPath: "productGetAllApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductGetAll"],
  endpoints: (build) => ({
    fetchProductGetAll: build.query({
      query: (take) => ({
        url: "/product/get-all",
        params: {
          take,
          sort: "title"
        }
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductBytitle: build.query({
      query: (title) => ({
        url: `/product/get-all?name=${title}`,
      }),
      providesTags: ["ProductGetAll"],
    }),
    addProductRate: build.mutation({
      query: (body) => ({
        url: "/product/set/rate",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInJvbGUiOiJVU0VSIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjU5MzUxOTM4LCJleHAiOjE2NTk1MjQ3Mzh9.vc249ShD3v50COUfKbHb1EQJWCCg42UiSTPvkxq68d8",
        },
        body,
      }),
      invalidatesTags: ["ProductGetAll"],
    }),
  }),
});

export const {
  useFetchProductGetAllQuery,
  useFetchProductBytitleQuery,
  useAddProductRateMutation,
} = productGetAllApi;
