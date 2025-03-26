import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, vi, it, expect } from "vitest";
import Button from "./Button";

// Mock del hook useNavigate de react-router-dom
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockedNavigate,
    };
});

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}));

const mockedNavigate = vi.fn();

describe("Button component", () => {
    it("navega a /Adopt cuando se hace click", () => {
        render(<Button />, { wrapper: MemoryRouter });
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(mockedNavigate).toHaveBeenCalledWith("/Adopt");
    });
});
