import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";
import { token } from "../../../utils/token";

export const adQueryApi = createApi({
  reducerPath: "adQueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["AD"],
  endpoints: (build) => ({
    fetchAllAd: build.query({
      query: () => ({
        url: "/ad/get-all",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["AD"],
    }),
  }),
});

export const { useFetchAllAdQuery } = adQueryApi;
