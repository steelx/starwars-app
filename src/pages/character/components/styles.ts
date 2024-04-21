import styled from "styled-components";

export const CharacterDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    background-color: rgba(32, 12, 64, 0.5);
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(215, 15, 232, 0.2);
    margin-bottom: 2rem;
`;

export const CharacterDetailsContainer = styled.div`
  margin-bottom: 1rem;

  h2 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const DetailsItem = styled.li`
    margin-bottom: 0.5rem;
    position: relative;
    
    :hover {
        position: absolute;
        content: "hi";
    }
`

export const FilmList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
