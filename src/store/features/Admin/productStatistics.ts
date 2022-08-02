import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const productsStatGetAll = createApi({
  reducerPath: "productsStatGetAll",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductsGetStat"],
  endpoints: (build) => ({
    fetchProductsGetStat: build.query({
      query: ({ take, collectionsType }) => ({
        url: "/product-statistic/get-all",
      }),
      providesTags: ["ProductsGetStat"],
    }),
  }),
});

export const { useFetchProductsGetStatQuery } = productsStatGetAll;
