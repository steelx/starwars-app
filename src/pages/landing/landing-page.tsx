import React from "react";
import {Container} from "@styles/styles";
import {useGetCharactersQuery} from "@store/star-wars-api/starWarsApi";

const LandingPage: React.FC = () => {
    useGetCharactersQuery({})

    return (
        <Container>
            <header>
                StarWars Characters
            </header>

            <section></section>
        </Container>
    )
};

export default LandingPage;
