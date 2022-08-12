import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";
import { token } from "../../../utils/token";

export const usersStatsApi = createApi({
  reducerPath: "usersStatsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["UsersList", "PopularUsers"],
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
      providesTags: ["UsersList"],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/admin/deletes/user/${id}`,
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["UsersList"],
    }),

    fetchPopularUsers: build.query({
      query: () => ({
        url: "/order/popular-users/price",
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ["PopularUsers"],
    }),
  }),
});

export const {
  useFetchUsersStatsQuery,
  useFetchPopularUsersQuery,
  useDeleteUserMutation,
} = usersStatsApi;
