export interface StarWarsAPIResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ICharacter[];
}

export interface ICharacter {
    id: string
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[]; // Array of film URLs
    species: string[]; // Assuming you don't need details about species
    vehicles: string[]; // Array of vehicle URLs
    starships: string[]; // Array of starship URLs
    created: string;
    edited: string;
    url: string;
}

export interface FilmDetail {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}
