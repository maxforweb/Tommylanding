import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
	reducerPath: "adminApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://aws.tomocat.com/api/site-data" }),
	endpoints: (builder) => ({
		getSitInfo: builder.query({
			query: () => `/`,
		}),
	}),
});

export const { useGetSitInfoQuery } = adminApi;
