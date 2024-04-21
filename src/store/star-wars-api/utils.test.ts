import {getFilmIds} from "./utils";

describe("Utils", () => {
    describe("getFilmIds", () => {
        test('should extract IDs from film URLs', () => {
            const filmUrls = [
                'https://swapi.dev/api/films/1/',
                'https://swapi.dev/api/films/2/',
                'https://swapi.dev/api/films/3/',
            ];

            const result = getFilmIds(filmUrls);
            expect(result).toEqual(['1', '2', '3']);
        });

        test('should return null if film URLs are invalid', () => {
            const filmUrls = [
                'https://swapi.dev/api/films/1/',
                'https://swapi.dev/api/films/invalid',
                'https://swapi.dev/api/films/3/',
            ];

            const result = getFilmIds(filmUrls);
            expect(result).toBeNull();
        });

        test('should handle empty array', () => {
            const result = getFilmIds([]);
            expect(result).toBeNull();
        });
    })
})