import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const productCategoryApi = createApi({
  reducerPath: "productCategoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["ProductCategory"],
  endpoints: (build) => ({
    fetchProductByCollectionType: build.query({
      query: ({ category, page }) => ({
        url: `/product/categories/${category}`,
        params: {
          page,
        },
      }),
      providesTags: (result) => ["ProductCategory"],
    }),
  }),
});

export const { useFetchProductByCollectionTypeQuery } = productCategoryApi;
