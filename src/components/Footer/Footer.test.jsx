import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { vi, describe, it, expect } from "vitest";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => {
            const translations = {
                copy: " MichisApp. Todos los derechos reservados.",
                created_by: "Creado por",
            };
            return translations[key] || key;
        },
    }),
}));

describe("Footer", () => {
    it("renderiza correctamente el contenido del footer", () => {
        render(<Footer />);
        const year = new Date().getFullYear();
        expect(
            screen.getByText(
                `© ${year} MichisApp. Todos los derechos reservados.`
            )
        ).toBeInTheDocument();
        expect(screen.getByText(/Creado por/i)).toBeInTheDocument();
        expect(
            screen.getByText(/Nico Fernández, Ana Castro & Ángel Aragón/)
        ).toBeInTheDocument();
    });
});
