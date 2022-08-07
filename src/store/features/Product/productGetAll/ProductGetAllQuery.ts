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
          sort: "title",
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductsGetAll: build.query({
      query: ({ take, category, page }) => ({
        url: `/product/get-all?category=${category}&page=${page}`,
        params: {
          take,
          sort: "title",
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductsByCategory: build.query({
      query: (category) => ({
        url: `/product/get-all?category=${category}`,
      }),
      providesTags: ["ProductGetAll"],
    }),
    fetchProductBytitle: build.query({
      query: ({ title, page }) => ({
        url: "/product/get-all",
        params: {
          title,
          page,
        },
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInJvbGUiOiJVU0VSIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjU5NTMwNTYyLCJleHAiOjE2NTk3MDMzNjJ9.j7xhNsCqvLriBiGkisiP7H_Y_u-A1dV-sHGf7puLRjM",
        },
        body,
      }),
      invalidatesTags: ["ProductGetAll"],
    }),
    fetchProductByCategory: build.query({
      query: ({ categoryId, collectionsType, take, page }) => ({
        url: "/product/get-all",
        params: {
          category: categoryId,
          collectionsType,
          take,
          page,
        },
      }),
      providesTags: ["ProductGetAll"],
    }),
  }),
});

export const {
  useFetchProductGetAllQuery,
  useFetchProductsGetAllQuery,
  useFetchProductsByCategoryQuery,
  useAddProductRateMutation,
  useFetchProductBytitleQuery,
  useFetchProductByCategoryQuery,
} = productGetAllApi;
