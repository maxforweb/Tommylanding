import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
	reducerPath: "adminApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
	endpoints: (builder) => ({
		getSitInfo: builder.query({
			query: () => `/users`,
		}),
	}),
});

export const { useGetSitInfoQuery } = adminApi;
