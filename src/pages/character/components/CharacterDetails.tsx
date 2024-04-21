import React from "react";
import {ICharacter} from "@store/star-wars-api/types";
import {
    CharacterDetailsWrapper,
    CharacterDetailsContainer,
    FilmList
} from "@pages/character/components/styles";
import {useGetCharacterFilmsQuery} from "@store/star-wars-api/starWarsApi";
import CharacterDetailsItem from "@pages/character/components/CharacterDetailsItem";


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
                <CharacterDetailsItem>Hair Color: {character.hair_color}</CharacterDetailsItem>
                <CharacterDetailsItem>Eye Color: {character.eye_color}</CharacterDetailsItem>
                <CharacterDetailsItem>Height: {character.height}</CharacterDetailsItem>
                <CharacterDetailsItem>Gender: {character.gender}</CharacterDetailsItem>
                <CharacterDetailsItem>Homeworld: {character.homeworld}</CharacterDetailsItem>
            </ul>
        </CharacterDetailsContainer>
        <FilmList>
            <h3>Films Appeared In:</h3>
            <ul>
                { films && films.length > 0 && (
                    films.map((detail, index) => (
                        <CharacterDetailsItem key={index}>{detail.title}</CharacterDetailsItem>
                    ))
                )}
                { isFilmDetailsLoading && (
                    <CharacterDetailsItem>Fetching film titles...</CharacterDetailsItem>
                )}
            </ul>
        </FilmList>
    </CharacterDetailsWrapper>
}

export default CharacterDetails;
