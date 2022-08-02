import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API } from "../../hooks/api";

export const apiAuth = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["POSTAuth"],
  endpoints: (build) => ({
    userSignUp: build.mutation({
      query: (auth) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: auth,
      }),
      invalidatesTags: ["apiAuth"],
    }),

    getSmsCode: build.query({
      query: (id) => ({
        url: `/user/sms-code/${id}`,
      }),
      invalidatesTags: ["apiAuth"],
    }),
    sendActivateCode: build.query({
      query: (auth) => ({
        url: `/auth/activate`,
        method: "POST",
        body: auth,
      }),
      invalidatesTags: ["apiAuth"],
    }),
    userLogin: build.mutation({
      query: (auth) => ({
        url: "auth/login",
        method: "POST",
        body: auth,
      }),
      invalidatesTags: ["apiAuth"],
    }),
  }),
});
export const {
  useUserSignUpMutation,
  useUserLoginMutation,
  useLazyGetSmsCodeQuery,
  useLazySendActivateCodeQuery,
} = apiAuth;
// user/sms-code/id-sigh up
