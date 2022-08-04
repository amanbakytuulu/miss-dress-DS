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
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
      }),
      providesTags: ["ProductFavorites"],
    }),
    addProductFavorites: build.mutation<IItemCard, IItemCard>({
      query: (item) => ({
        url: `/product/favorite/${item.id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || ""
          )}`,
        },
        body: item,
      }),
      invalidatesTags: ["ProductFavorites"],
    }),
  }),
});

export const { useFetchProductFavoritesQuery, useAddProductFavoritesMutation } =
  productFavoritesApi;
