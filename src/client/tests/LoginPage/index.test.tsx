import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react"
import LoginPage from "../../LoginPage";

describe("Login page", () => {
    it("render without crashing", () => {
        render(<LoginPage/ >)
    }) 

    it("display error message when submitting with empty fileds", async () => {
        const { getByTestId } = render(<LoginPage />);
        const loginBtn = getByTestId("login-form")
        fireEvent.submit(loginBtn);

        await waitFor(() => {
            expect(getByTestId("submit-message").textContent).toBe("Please fill in all fields")
        })
    })
    // todo: add the test case after knowing how to mock fetch
})