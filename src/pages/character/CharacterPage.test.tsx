import {render} from "@testing-library/react";
import {MockedFunction} from "vitest";
import {MemoryRouter} from 'react-router-dom'
import {mockCharacter} from "@test-helpers/character-data";
import CharacterPage from "@pages/character/CharacterPage";
import {useCharacterData} from "@pages/character/hooks/useCharacterData";

vi.mock("@pages/character/hooks/useCharacterData")
vi.mock("@store/star-wars-api/starWarsApi", (module) => ({
    ...module,
    useGetCharacterFilmsQuery: vi.fn().mockImplementation(() => ({
        isLoading: true,
        refetch: vi.fn()
    }))
}))

describe("CharacterPage", () => {
    const mockUseCharacterData = useCharacterData as MockedFunction<typeof useCharacterData>;

    test("renders correctly", () => {
        mockUseCharacterData.mockImplementation(() => ({
            data: mockCharacter,
            isLoading: false
        }))

        const {asFragment} = render(<MemoryRouter><CharacterPage /></MemoryRouter>)
        expect(asFragment()).toMatchSnapshot()
    })
});
