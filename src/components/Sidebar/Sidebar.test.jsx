import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import { vi, expect, describe, it } from "vitest";

describe("Sidebar", () => {
    const toggleSidebarMock = vi.fn();

    it("se muestra cuando isOpen es true y contiene enlaces", () => {
        render(
            <BrowserRouter>
                <Sidebar isOpen={true} toggleSidebar={toggleSidebarMock} />
            </BrowserRouter>
        );

        expect(screen.getByText("Menú")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Adopta")).toBeInTheDocument();
    });

    it("llama a toggleSidebar al hacer clic en el botón de cerrar", () => {
        render(
            <BrowserRouter>
                <Sidebar isOpen={true} toggleSidebar={toggleSidebarMock} />
            </BrowserRouter>
        );

        const closeButton = screen.getByRole("button");
        fireEvent.click(closeButton);
        expect(toggleSidebarMock).toHaveBeenCalled();
    });
});
