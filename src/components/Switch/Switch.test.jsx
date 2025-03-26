import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SwitchToggle from "./Switch";
import { vi, expect, describe, it } from "vitest";

describe("SwitchToggle", () => {
    it("dispara onChange al hacer clic", () => {
        const handleChange = vi.fn();
        render(<SwitchToggle checked={false} onChange={handleChange} />);

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("se muestra activado si checked es true", () => {
        render(<SwitchToggle checked={true} onChange={() => {}} />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeChecked();
    });
});
