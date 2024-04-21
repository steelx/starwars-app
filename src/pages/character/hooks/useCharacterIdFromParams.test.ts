import {renderHook} from "@testing-library/react";
import {useCharacterIdFromParams} from "./useCharacterIdFromParams";
import {useParams} from "react-router-dom";
import {MockedFunction} from "vitest";

vi.mock("react-router-dom")


describe('useCharacterIdFromParams', () => {
    const mockUseParams = useParams as MockedFunction<typeof useParams>;

    test('throws error when id is missing in params', () => {
        mockUseParams.mockReturnValueOnce({})
        expect(() => {
            renderHook(() => useCharacterIdFromParams())
        }).toThrowError('Missing character Id in params!')
    })

    test('returns id from params when present', () => {
        mockUseParams.mockReturnValueOnce({ id: "123" })
        const { result } = renderHook(() => useCharacterIdFromParams())
        expect(result.current).toBe("123")
    })
})
