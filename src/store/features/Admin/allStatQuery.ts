import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";
import { token } from "../../../utils/token";

export const allStatApi = createApi({
  reducerPath: "allStatApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["WidgetStat", "GraphStat"],
  endpoints: (build) => ({
    fetchAllStat: build.query({
      query: () => ({
        url: "/order/lastDate-order-report",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["WidgetStat"],
    }),
    fetchGraphStat: build.query({
      query: () => ({
        url: "/order/grafik",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["GraphStat"],
    }),
  }),
});

export const { useFetchAllStatQuery, useFetchGraphStatQuery } = allStatApi;
