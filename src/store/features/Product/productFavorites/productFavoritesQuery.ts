import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productFavoritesApi = createApi({
  reducerPath: "productFavoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductFavorites"],
  endpoints: (build) => ({
    fetchProductFavorites: build.query({
      query: () => ({
        url: "/product/list/favorites",
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
      }),
    }),
    addProductFavorites: build.mutation({
      query: (item) => ({
        url: `/product/favorite/${item.id}`,
        method: "PATCH",
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN,
        },
        body: item,
      }),
    }),
  }),
});

export const { useFetchProductFavoritesQuery, useAddProductFavoritesMutation } = productFavoritesApi;