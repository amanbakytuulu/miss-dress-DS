import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productFavoritesApi = createApi({
  reducerPath: "productFavoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductFavorites"],
  endpoints: (build) => ({
    fetchProductFavorites: build.query({
      query: () => `favorites`,
    }),
  }),
});

export const { useFetchProductFavoritesQuery } = productFavoritesApi;
