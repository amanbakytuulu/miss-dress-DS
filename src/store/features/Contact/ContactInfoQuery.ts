import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../../../hooks/api";


export const contactInfoApi = createApi({
    reducerPath: "contactInfoApi",
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    tagTypes: ["ContactInfo"],
    endpoints: (build) => ({
        addContactInfo: build.mutation({
            query: (user) => ({
                url: "/contact-info",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem("accessToken") || ""
                    )}`,
                },
                body: user
            }),
            invalidatesTags: ["ContactInfo"],
        }),
        updateContactInfo: build.mutation({
            query: (user) => ({
                url: `/contact-info/${user.id}`,
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem("accessToken") || ""
                    )}`,
                },
                body: user,
            }),
            invalidatesTags: ["ContactInfo"],
        })
    }),
});

export const { useAddContactInfoMutation, useUpdateContactInfoMutation } = contactInfoApi;
