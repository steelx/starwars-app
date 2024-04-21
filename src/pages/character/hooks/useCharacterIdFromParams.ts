import {useParams} from "react-router-dom";

type CharacterIdFromParams = () => string

export const useCharacterIdFromParams: CharacterIdFromParams = () => {
    const params = useParams<{id: string}>();

    if (typeof params?.id === "undefined") {
        throw new Error('Missing character Id in params!');
    }

    return params.id;
}
