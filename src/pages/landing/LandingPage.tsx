import React from "react";
import {useGetCharactersQuery} from "@store/star-wars-api/starWarsApi";
import {Container} from "@shared/styles";
import CharactersGridContainer from "@pages/landing/components/CharactersGridContainer";
import starSvg from "@assets/star.svg";
import warsSvg from "@assets/wars.svg";
import {StarWarsContainer, StarWarsHeader} from "@pages/landing/styles";

const LandingPage: React.FC = () => {
    const { data, isLoading } = useGetCharactersQuery({})

    return (
        <Container>
            <StarWarsHeader>
                <StarWarsContainer>
                    <img src={starSvg} alt="Star" className="star" />
                    <img src={warsSvg} alt="Wars" className="wars" />
                    <h2 className="byline" id="byline">The Force Awakens</h2>
                </StarWarsContainer>
            </StarWarsHeader>

            {isLoading && (<div>Loading...</div>)}

            { data && data.length > 0 && <CharactersGridContainer data={data} /> }
        </Container>
    )
};

export default LandingPage;
