import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FilmDetail, ICharacter, StarWarsAPIResponse} from "@store/star-wars-api/types";
import {FieldArgs, QueryArgs, QueryFnResponse} from "@store/types";
import {getFilmIds} from "./utils";

const BASE_URL = 'https://swapi.dev/api';
export const starWarsApi = createApi({
    reducerPath: 'starWarsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (build) => ({
        getCharacters: build.query<ICharacter[], QueryArgs>({
            query: (queryArgs) => ({
                url: `/people?page=${queryArgs.page ?? 1}`,
            }),
            transformResponse: (response: StarWarsAPIResponse) => response.results.map((r, idx) => ({...r, id: String(idx+1)}))
        }),
        getCharacter: build.query<ICharacter, FieldArgs>({
            query: ({ id }) => ({
                url: `/people/${id}`,
            }),
            transformResponse: (response: ICharacter, _, { id }) => ({
                ...response,
                id
            })
        }),
        getCharacterFilms: build.query<FilmDetail[], string[]>({
            async queryFn (filmUrls, api, extraOptions, baseQuery) {
                const filmIds = getFilmIds(filmUrls)
                if (!filmIds) {
                    return { error: 'Invalid film URLs' };
                }

                const allFilms = filmIds.map(
                    async (id: string) => await (baseQuery({
                        url: `/films/${id}`,
                        method: 'GET'
                    }) as Promise<QueryFnResponse<FilmDetail[]>>)
                )

                return await Promise.all(allFilms)
                    .then((results) => {
                        const hasError = results.some(r => r.error)
                        if (hasError) {
                            return {
                                error: results.find(result => result.error)?.error
                            }
                        }

                        const data: FilmDetail[] = results
                            .flatMap(result => result.data) as FilmDetail[]

                        return { data }
                    })
            }
        })
    })
});

export const {
    useGetCharactersQuery,
    useGetCharacterQuery,
    useGetCharacterFilmsQuery
} = starWarsApi
