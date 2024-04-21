import React from "react";
import {NavLink} from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import {Container} from "@shared/styles";
import {useCharacterData} from "@pages/character/hooks/useCharacterData";

const CharacterPage: React.FC = () => {
    const { data, isLoading } = useCharacterData()

    if (isLoading || !data) return null

    return <Container>
        <header><NavLink to="/">Back</NavLink></header>
        <CharacterDetails character={data} />
    </Container>
}

export default CharacterPage;
