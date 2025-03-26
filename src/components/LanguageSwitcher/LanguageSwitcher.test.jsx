import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { vi, describe, it, expect } from "vitest";

const changeLanguageMock = vi.fn();
let currentLang = "es";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: {
            language: currentLang,
            changeLanguage: (lang) => {
                currentLang = lang;
                changeLanguageMock(lang);
            },
        },
    }),
}));

vi.mock("react-world-flags", () => ({
    __esModule: true,
    default: ({ code }) => <div data-testid="flag">Bandera: {code}</div>,
}));

describe("LanguageSwitcher", () => {
    it("muestra la bandera correcta y cambia el idioma al hacer clic", () => {
        render(<LanguageSwitcher />);
        expect(screen.getByText("Bandera: gb")).toBeInTheDocument();

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(changeLanguageMock).toHaveBeenCalledWith("en");
    });
});
