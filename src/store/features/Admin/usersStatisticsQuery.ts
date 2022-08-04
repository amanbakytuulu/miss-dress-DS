import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";
import { token } from "../../../utils/token";

export const usersStatsApi = createApi({
  reducerPath: "usersStatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UserStat"],
  endpoints: (build) => ({
    fetchUsersStats: build.query({
      query: ({ take, page, sort }) => ({
        url: "/user/users-orders",
        params: {
          take,
          page,
          sort,
        },
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["UserStat"],
    }),

    fetchPopularProducts: build.query({
      query: () => ({
        url: "/order/popular-users/price",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["UserStat"],
    }),
  }),
});

export const { useFetchUsersStatsQuery, useFetchPopularProductsQuery } =
  usersStatsApi;
