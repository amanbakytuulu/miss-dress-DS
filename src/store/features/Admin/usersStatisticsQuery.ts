import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const usersStatsApi = createApi({
  reducerPath: "usersStatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UserStat"],
  endpoints: (build) => ({
    fetchUsersStats: build.query({
      query: () => ({
        url: "/user/users-orders",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicm9sZSI6IlNVUEVSX0FETUlOIiwidHlwZSI6ImFjY2Vzc1Rva2VuIiwiaWF0IjoxNjU5NDM0MTQzLCJleHAiOjE2NTk2MDY5NDN9.HWQgLGHlJH0vehPep19QYh8BpztIb0dpf0R9RcfZGEo",
        },
      }),
      providesTags: ["UserStat"],
    }),
  }),
});

export const { useFetchUsersStatsQuery } = usersStatsApi;
