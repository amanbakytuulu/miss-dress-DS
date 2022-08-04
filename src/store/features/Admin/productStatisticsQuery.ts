import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const productsStatApi = createApi({
  reducerPath: "productsStatApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductsStat"],
  endpoints: (build) => ({
    fetchProductsStat: build.query({
      query: (collection) => ({
        url: `/product-statistic/get-product-by-collection/${collection}`,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlNVUEVSX0FETUlOIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjU5NDM0MTQzLCJleHAiOjE2NTk2MDY5NDN9.HWQgLGHlJH0vehPep19QYh8BpztIb0dpf0R9RcfZGEo",
        },
      }),
      providesTags: ["ProductsStat"],
    }),
  }),
});

export const { useFetchProductsStatQuery } = productsStatApi;
