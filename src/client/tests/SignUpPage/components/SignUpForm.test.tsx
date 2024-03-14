import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUpForm from "../../../SignUpPage/components/SignUpForm";

describe("SignUpForm", () =>{
    it("updates userName state correctly", () => {
        const { getByLabelText } = render(<SignUpForm userName="" email="" password="" onSubmit={() => {}} />);
        const userNameInput = getByLabelText("Your name:") as HTMLInputElement;
        fireEvent.change(userNameInput, { target: { value: "Test User" } });
        expect(userNameInput.value).toBe("Test User");
    });

    it("updates email state correctly", () => {
        const { getByLabelText } = render(<SignUpForm userName="" email="" password="" onSubmit={() => {}} />);
        const emailInput = getByLabelText("Email:") as HTMLInputElement;
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        expect(emailInput.value).toBe("test@example.com");
    });

    it("updates password state correctly", () => {
        const { getByLabelText } = render(<SignUpForm userName="" email="" password="" onSubmit={() => {}} />);
        const passwordInput = getByLabelText("Password:") as HTMLInputElement;
        fireEvent.change(passwordInput, { target: { value: "password123" } });
        expect(passwordInput.value).toBe("password123");
    });
})
