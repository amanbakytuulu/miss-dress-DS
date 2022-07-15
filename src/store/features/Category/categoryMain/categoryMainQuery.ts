import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../../hooks/api";

export const categoryMainApi = createApi({
  reducerPath: "categoryMainApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["CategoryMain"],
  endpoints: (build) => ({
    fetchCategoryMain: build.query({
      query: () => ({
        url: "/category/main",
      }),
      providesTags: ["CategoryMain"],
    }),
  }),
});
