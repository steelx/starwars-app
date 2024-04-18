export interface StarWarsAPIResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
}

export interface Film {
    url: string; // Assuming you don't need details about films
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Film[]; // Array of film URLs
    species: string[]; // Assuming you don't need details about species
    vehicles: string[]; // Array of vehicle URLs
    starships: string[]; // Array of starship URLs
    created: string;
    edited: string;
    url: string;
}
