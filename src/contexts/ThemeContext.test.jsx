import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeContext, { ThemeProvider } from "./ThemeContext";
import { vi, describe, it, expect, beforeEach } from "vitest";

const TestComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <p data-testid="theme">{theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

describe("ThemeContext", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("usa 'light' por defecto si no hay valor en localStorage", () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme").textContent).toBe("light");
    });

    it("lee el tema desde localStorage si existe", () => {
        localStorage.setItem("theme", "dark");
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme").textContent).toBe("dark");
    });

    it("toggleTheme cambia el tema de light a dark y lo guarda en localStorage", () => {
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        const button = screen.getByText("Toggle Theme");
        fireEvent.click(button);
        expect(screen.getByTestId("theme").textContent).toBe("dark");
        expect(localStorage.getItem("theme")).toBe("dark");
    });

    it("toggleTheme cambia el tema de dark a light y lo guarda en localStorage", () => {
        localStorage.setItem("theme", "dark");
        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );
        const button = screen.getByText("Toggle Theme");
        fireEvent.click(button);
        expect(screen.getByTestId("theme").textContent).toBe("light");
        expect(localStorage.getItem("theme")).toBe("light");
    });
});
