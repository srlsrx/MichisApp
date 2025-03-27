import axios from "axios";
import CatService from "./catServices";
import { vi, describe, expect, it, afterEach } from "vitest";

vi.mock("axios");

describe("CatService", () => {
    const mockData = [
        {
            id: "abc123",
            url: "https://cdn2.thecatapi.com/images/abc123.jpg",
            breeds: [{ name: "Siamese" }],
        },
    ];

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("devuelve datos correctamente desde la API", async () => {
        axios.get.mockResolvedValue({ data: mockData });

        const result = await CatService();

        expect(axios.get).toHaveBeenCalledWith(
            "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1",
            {
                headers: {
                    "x-api-key": import.meta.env.VITE_API_KEY,
                },
            }
        );
        expect(result).toEqual(mockData);
    });

    it("maneja errores correctamente", async () => {
        const consoleSpy = vi
            .spyOn(console, "error")
            .mockImplementation(() => {});
        axios.get.mockRejectedValue(new Error("API error"));

        const result = await CatService();

        expect(consoleSpy).toHaveBeenCalledWith(
            "Error fetching data:",
            expect.any(Error)
        );
        expect(result).toBeUndefined();

        consoleSpy.mockRestore();
    });
});
