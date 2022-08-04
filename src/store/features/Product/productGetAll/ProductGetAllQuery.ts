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
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductBytitle: build.query({
      query: (title) => ({
        url: `/product/get-all?name=${title}`,
      }),
      providesTags: ["ProductGetAll"],
    }),
  }),
});

export const { useFetchProductGetAllQuery, useFetchProductBytitleQuery } =
  productGetAllApi;
