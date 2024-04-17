import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { adminApi } from "./services";

export const store = configureStore({
	reducer: {
		[adminApi.reducerPath]: adminApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(adminApi.middleware),
});

setupListeners(store.dispatch);
