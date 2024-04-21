import React from "react";
import {ICharacter} from "@store/star-wars-api/types";
import {
    CharacterDetailsWrapper,
    CharacterDetailsContainer,
    FilmList
} from "@pages/character/components/styles";
import {useGetCharacterFilmsQuery} from "@store/star-wars-api/starWarsApi";


interface CharacterProps {
    character: ICharacter
}

const CharacterDetails: React.FC<CharacterProps> = ({ character }) => {
    const { data: films, isLoading: isFilmDetailsLoading } =
        useGetCharacterFilmsQuery(character.films)

    return <CharacterDetailsWrapper>
        <CharacterDetailsContainer>
            <h2>{character.name}</h2>
            <ul>
                <li>Hair Color: {character.hair_color}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Height: {character.height}</li>
                <li>Gender: {character.gender}</li>
                <li>Homeworld: {character.homeworld}</li>
            </ul>
        </CharacterDetailsContainer>
        <FilmList>
            <h3>Films Appeared In:</h3>
            <ul>
                { films && films.length > 0 && (
                    films.map((detail, index) => (
                        <li key={index}>{detail.title}</li>
                    ))
                )}
                { isFilmDetailsLoading && (
                    <li>Fetching film titles...</li>
                )}
            </ul>
        </FilmList>
    </CharacterDetailsWrapper>
}

export default CharacterDetails;
