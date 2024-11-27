import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.openweathermap.org/data/2.5/',
	}),
	endpoints: builder => ({
		getWeatherByCityName: builder.mutation<WeatherRequestModel, string>({
			query: cityName => `/weather?q=${cityName}`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByCityNameMutation } = weatherApi
