import styled from "styled-components";

export const ListContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 2rem;
    border: 1px dotted aliceblue;
`

export const ListItem = styled.div`
    p {
        font-family: "Star Wars", sans-serif;
        color: #FFFFFF;
    }
    
    a {
        color: yellow;
        display: block;
    }
    a:visited {
        color: darkslateblue;
        text-decoration-color: darkblue;
    }
`

export const StarWarsHeader = styled.header`
    position: relative;
    height: 17em;
`

export const StarWarsContainer = styled.div`
    height: 17em;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 34em;

    perspective: 800px;
    transform-style: preserve-3d;

    .star {
        animation: star 3s ease-out;
    }
    .wars {
        animation: wars 3s ease-out;
    }
    .byline span {
        animation: spin-letters 3s linear;
    }
    .byline {
        animation: move-byline 3s linear;
    }

    @keyframes star {
        0% {
            opacity: 0;
            transform: scale(1.5) translateY(-0.75em);
        }
        20% {
            opacity: 1;
        }
        89% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: translateZ(-1000em);
        }
    }

    @keyframes wars {
        0% {
            opacity: 0;
            transform: scale(1.5) translateY(0.5em);
        }
        20% {
            opacity: 1;
        }
        90% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: translateZ(-1000em);
        }
    }

    @keyframes spin-letters {
        0%, 10% {
            opacity: 0;
            transform: rotateY(90deg);
        }
        30% {
            opacity: 1;
        }
        70%, 86% {
            transform: rotateY(0);
            opacity: 1;
        }
        95%, 100% {
            opacity: 0;
        }
    }

    @keyframes move-byline {
        0% {
            transform: translateZ(5em);
        }
        100% {
            transform: translateZ(0);
        }
    }
    
    > img {
        width: 100%;
    }

    .byline span {
        display: inline-block;
    }

    .star, .wars, .byline {
        position: absolute;
    }

    .star {
        top: -0.75em;
    }

    .wars {
        bottom: -0.5em;
    }

    .byline {
        color: #fff;
        font-family: "Arial", Lato;
        font-size: 2.25em;
        left: -2em;
        letter-spacing: 0.4em;
        right: -2em;
        text-align: center;
        text-transform: uppercase;
        top: 29%;
    }
`