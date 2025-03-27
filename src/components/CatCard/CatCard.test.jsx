import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, vi, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CatCard from "./CatCard";
import { FavoritesProvider } from "../../contexts/FavoritesContext";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => key, // Devuelve la clave sin traducir
    }),
}));


describe("CatCard", () => {
    vi.mock("../Button/Button", () => ({
        default: () => <div data-testid="mock-button" />,
      }));

    const mockProps = {
        id: "1",
        url: "https://placekitten.com/400/300",
        breeds: "Siamés",
        description: "Un gato adorable en busca de un hogar.",
    };

    it("renderiza correctamente los datos del gato", () => {
        render(
            <FavoritesProvider>
            <MemoryRouter>        
                <CatCard {...mockProps} />
            </MemoryRouter>
            </FavoritesProvider>);

        const image = screen.getByAltText("Gatito en adopción");
        const breedText = screen.getByText(mockProps.breeds);
        const descriptionText = screen.getByText(mockProps.description);

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", mockProps.url);
        expect(breedText).toBeInTheDocument();
        expect(descriptionText).toBeInTheDocument();
    });
});
