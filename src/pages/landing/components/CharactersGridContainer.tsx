import React from "react";
import {NavLink} from "react-router-dom";
import {ListContainer, ListItem} from "@pages/landing/styles";
import {ICharacter} from "@store/star-wars-api/types";

interface CharactersGridContainerProps {
    data: ICharacter[];
}
const CharactersGridContainer: React.FC<CharactersGridContainerProps> = ({ data }) => (
    <ListContainer>
        {
            data && data.length > 0 && data.map((character) => (
                <ListItem key={character.id}>
                    <p>{character.name} <NavLink to={`/character/${character.id}`}>view</NavLink></p>
                </ListItem>
            ))
        }
    </ListContainer>
)

export default CharactersGridContainer;
