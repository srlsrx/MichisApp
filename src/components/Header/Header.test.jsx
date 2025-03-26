import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { vi, describe, it, expect } from "vitest";

// Mock de useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => {
            const translations = {
                adopt: "Adoptar",
            };
            return translations[key] || key;
        },
    }),
}));

// Mock de Sidebar para simplificar el test
vi.mock("../Sidebar/Sidebar", () => ({
    default: () => <div data-testid="mock-sidebar" />,
}));

vi.mock("../Switch/ThemeInit", () => ({
    default: () => <div data-testid="mock-theme-toggle" />,
}));

vi.mock("../LanguageSwitcher/LanguageSwitcher", () => ({
    default: () => <div data-testid="mock-language-switcher" />,
}));

describe("Header", () => {
    it("renderiza logo, enlaces y botón de menú", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        expect(screen.getByAltText("Paws & Claws")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Adoptar")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("abre y cierra el sidebar al hacer click en el botón de menú", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const menuButton = screen.getByRole("button");
        fireEvent.click(menuButton);
        expect(screen.getByTestId("mock-sidebar")).toBeInTheDocument();
    });
});
