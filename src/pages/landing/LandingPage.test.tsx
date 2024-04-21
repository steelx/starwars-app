import {render} from "@testing-library/react";
import {MockedFunction} from "vitest";
import {useGetCharactersQuery} from "@store/star-wars-api/starWarsApi";
import LandingPage from "@pages/landing/LandingPage";

vi.mock("@store/star-wars-api/starWarsApi");

describe('LandingPage', () => {
    const mockUseGetCharactersQuery = useGetCharactersQuery as MockedFunction<typeof useGetCharactersQuery>;

    test("renders without crashing", () => {
        mockUseGetCharactersQuery.mockImplementationOnce(() => ({
            isLoading: true,
            refetch: vi.fn()
        }));

        render(<LandingPage />)
    })

});
