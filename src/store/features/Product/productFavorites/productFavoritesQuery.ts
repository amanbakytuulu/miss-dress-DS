import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

import { IItemCard } from "./../../../../components/ProductCard/types";

export const productFavoritesApi = createApi({
  reducerPath: "productFavoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductFavorites"],
  endpoints: (build) => ({
    fetchProductFavorites: build.query({
      query: () => ({
        url: "/product/list/favorites",
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInJvbGUiOiJVU0VSIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjU5MzUxOTM4LCJleHAiOjE2NTk1MjQ3Mzh9.vc249ShD3v50COUfKbHb1EQJWCCg42UiSTPvkxq68d8",
        },
      }),
      providesTags: ["ProductFavorites"],
    }),
    addProductFavorites: build.mutation<IItemCard, IItemCard>({
      query: (item) => ({
        url: `/product/favorite/${item.id}`,
        method: "PATCH",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDUsInJvbGUiOiJVU0VSIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjU5MzUxOTM4LCJleHAiOjE2NTk1MjQ3Mzh9.vc249ShD3v50COUfKbHb1EQJWCCg42UiSTPvkxq68d8",
        },
        body: item,
      }),
      invalidatesTags: ["ProductFavorites"],
    }),
  }),
});

export const { useFetchProductFavoritesQuery, useAddProductFavoritesMutation } =
  productFavoritesApi;
