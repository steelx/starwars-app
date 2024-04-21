import {MockedFunction} from "vitest";
import {render} from "@testing-library/react";
import CharacterDetails from "@pages/character/components/CharacterDetails";
import {useGetCharacterFilmsQuery} from "@store/star-wars-api/starWarsApi";
import {mockCharacter} from "@test-helpers/character-data";

vi.mock("@store/star-wars-api/starWarsApi");

describe("CharacterDetails", () => {
    const mockUseGetCharacterFilmsQuery = useGetCharacterFilmsQuery as MockedFunction<typeof useGetCharacterFilmsQuery>;

    afterEach(() => {
        vi.resetAllMocks()
    })

    test("should render character details", async () => {
        mockUseGetCharacterFilmsQuery.mockReturnValueOnce({
            isLoading: true,
            refetch: vi.fn()
        })

        const {asFragment} = render(<CharacterDetails character={mockCharacter} />)
        expect(asFragment()).toMatchSnapshot()
    })

    test("should display `Fetching film titles...` while films is loading", async () => {
        mockUseGetCharacterFilmsQuery.mockReturnValueOnce({
            isLoading: true,
            refetch: vi.fn()
        })

        const { getByText } = render(<CharacterDetails character={mockCharacter} />)
        expect(getByText("Fetching film titles...")).toBeTruthy()
    })

    test("should display films appeared in", async () => {
        mockUseGetCharacterFilmsQuery.mockReturnValueOnce({
            data: [
                { title: "Lalola" },
                { title: "Star wars movie" },
            ],
            isLoading: false,
            refetch: vi.fn()
        })

        const { getByText } = render(<CharacterDetails character={mockCharacter} />)
        expect(getByText("Lalola")).toBeTruthy()
        expect(getByText("Star wars movie")).toBeTruthy()
    })
});
