import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeToggle from "./ThemeInit";
import ThemeContext from "../../contexts/ThemeContext";
import { vi, expect, describe, it } from "vitest";

const renderWithTheme = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <ThemeContext.Provider {...providerProps}>{ui}</ThemeContext.Provider>,
        renderOptions
    );
};

describe("ThemeToggle", () => {
    it("renderiza el switch y refleja el estado del tema", () => {
        const providerProps = {
            value: { theme: "dark", toggleTheme: vi.fn() },
        };

        renderWithTheme(<ThemeToggle />, { providerProps });

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeChecked();
    });

    it("cambia el tema al hacer clic", () => {
        const toggleThemeMock = vi.fn();
        const providerProps = {
            value: { theme: "light", toggleTheme: toggleThemeMock },
        };

        renderWithTheme(<ThemeToggle />, { providerProps });

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(toggleThemeMock).toHaveBeenCalledTimes(1);
    });
});
