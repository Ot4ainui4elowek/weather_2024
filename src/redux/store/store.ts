import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { weatherApi } from '../weather_api/weather_api'

export const makeStore = () =>
	configureStore({
		reducer: {
			// Add the generated reducer as a specific top-level slice
			[weatherApi.reducerPath]: weatherApi.reducer,
		},
		// Adding the api middleware enables caching, invalidation, polling,
		// and other useful features of `rtk-query`.
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(weatherApi.middleware),
	})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
