import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { API } from "../../../hooks/api";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Notification"],
  endpoints: (build) => ({
    fetchNotification: build.query({
      query: () => ({
        url: "/notification",
      }),
      providesTags: ["Notification"],
    }),
  }),
});
