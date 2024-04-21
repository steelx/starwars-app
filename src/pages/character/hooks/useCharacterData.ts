import {useCharacterIdFromParams} from "@pages/character/hooks/useCharacterIdFromParams";
import {useGetCharacterQuery} from "@store/star-wars-api/starWarsApi";
import {ICharacter} from "@store/star-wars-api/types";

interface UseCharacterDataReturn {
    data: ICharacter | undefined
    isLoading: boolean
}

export const useCharacterData = (): UseCharacterDataReturn => {
    const id = useCharacterIdFromParams()
    const { data, isLoading } = useGetCharacterQuery({id})

    return {
        data, isLoading
    }
}
