// to be write the correct test
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUpIndex from "../../SignUpPage";

describe("SignUpIndex Component", () => {
  test("Submitting the form calls handleSubmit with correct data", () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<SignUpIndex />);

    
    fireEvent.change(getByLabelText("Your name:"), {
        target: { value: "testuser" }
    });
    fireEvent.change(getByLabelText("Email:"), {
        target: { value: "test@example.com" }
    });
    fireEvent.change(getByLabelText("Password:"), {
        target: { value: "password123" }
    });
    fireEvent.click(getByText("Submit"));

    
    // expect(handleSubmit).toHaveBeenCalledWith(
    //   "testuser",
    //   "test@example.com",
    //   "password123",
    //   expect.any(Object) // event object
    // );
  });
});
