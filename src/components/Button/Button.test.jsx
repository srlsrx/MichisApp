import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { describe, it, expect } from "vitest";

import Button from "./Button";

// // Mock del hook useNavigate de react-router-dom
// vi.mock("react-router-dom", async () => {
//     const actual = await vi.importActual("react-router-dom");
//     return {
//         ...actual,
//         useNavigate: () => mockedNavigate,
//     };
// });

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => key,
    }),
}));


const handleClickMock = vi.fn();

describe("Button component", () => {
    it("ejecuta la función onClick cuando se hace click", () => {
        const handleClickMock = vi.fn(); // Definimos el mock de la función
        render(<Button text="Adopt" onClick={handleClickMock} />, { wrapper: MemoryRouter });

        const button = screen.getByRole("button", { name: "Adopt" });
        fireEvent.click(button);

        expect(handleClickMock).toHaveBeenCalledTimes(1);
    });
});
