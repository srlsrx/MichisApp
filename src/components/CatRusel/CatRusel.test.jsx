import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, vi, expect } from "vitest";
import CatRusel from "./CatRusel";
import { HomeProvider } from "../../contexts/HomeContext";



// Mock del componente CatCard
vi.mock("../CatCard/CatCard", () => ({
    default: ({ id }) => <div data-testid="mock-cat-card">Gato {id}</div>,
}));

// Mock del servicio de datos
vi.mock("../../services/catServices", () => ({
    default: vi.fn().mockResolvedValue([
        {
            id: "1",
            url: "https://placekitten.com/200/300",
            breeds: [{ name: "Siamés", description: "Sociable y cariñoso" }],
        },
        {
            id: "2",
            url: "https://placekitten.com/300/300",
            breeds: [{ name: "Persa", description: "Tranquilo y peludo" }],
        },
        {
            id: "3",
            url: "https://placekitten.com/400/300",
            breeds: [{ name: "Bengalí", description: "Activo y juguetón" }],
        },
        {
            id: "4",
            url: "https://placekitten.com/500/300",
            breeds: [{ name: "Maine Coon", description: "Grande y amigable" }],
        },
    ]),
}));

describe("CatRusel", () => {
    it("renderiza correctamente las tarjetas de gatos", async () => {
        render(
            <HomeProvider>
                <CatRusel />
            </HomeProvider>
            );

        await waitFor(() => {
            const cards = screen.getAllByTestId("mock-cat-card");
            expect(cards.length).toBeGreaterThan(0);
        });
    });
});
