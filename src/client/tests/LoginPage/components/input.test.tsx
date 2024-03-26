import React from "react";
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import LoginInput from "../../../LoginPage/component/input";

describe("LoginInput", () => {
    it("renders email input", () => {
        const fakeOnChange = jest.fn()
        const { getByLabelText } = render(<LoginInput value="" onChange={fakeOnChange} label="Email" type="email" placeholder="xxx@gmail.com" />);
        const emailInput = getByLabelText("Email:")
        expect(emailInput).toHaveAttribute("type", "email")
    })

    it("renders password input", () =>{
        const fakeOnChange = jest.fn()
        const { getByLabelText } = render(<LoginInput value="" onChange={fakeOnChange} label="Password" type="password" placeholder="xxx" />);
        const passwordInput = getByLabelText("Password:")
        expect(passwordInput).toHaveAttribute("type", "password")
    })

    it("triggers the function when the input is updated", () => {
        const fakeOnChange = jest.fn()
        const { getByLabelText } = render(<LoginInput value="" onChange={fakeOnChange} label="Email" type="email" placeholder="xxx@gmail.com" />);
        const emailInput = getByLabelText("Email:")
        fireEvent.change(emailInput, { target: { value: "test@gmail.com" }})
        expect(fakeOnChange).toHaveBeenCalledTimes(1)
        expect(fakeOnChange).toHaveBeenCalledWith("test@gmail.com")        

    })

})