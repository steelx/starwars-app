import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Character, StarWarsAPIResponse} from "@store/star-wars-api/types";
import {QueryArgs} from "@store/types";

const BASE_URL = 'https://swapi.dev/api';
export const starWarsApi = createApi({
    reducerPath: 'starWarsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        getCharacters: build.query<Character[], QueryArgs>({
            query: (queryArgs) => ({
                url: `/people?page=${queryArgs.page ?? 1}`,
            }),
            transformResponse: (response: StarWarsAPIResponse) => response.results
        })
    })
});

export const { useGetCharactersQuery } = starWarsApi
