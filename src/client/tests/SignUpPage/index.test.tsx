// Todo: check how to mock fetch. //
jest.mock("node-fetch")

import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUpIndex from "../../SignUpPage";

describe('SignUpIndex component', () => {

  test('renders without crashing', () => {
    render(<SignUpIndex />);
  });

  test('displays error message when submitting with empty fields', async () => {
    const { getByTestId } = render(<SignUpIndex />);
    const submitBtn = getByTestId("sign-up-form-submit-btn")
    fireEvent.submit(submitBtn);
    
    await waitFor(() => {
      expect(getByTestId("submit-message").textContent).toBe("Please fill in all fields.")
    })
  });

  // test("display successfully created an account with filled fileds", async () => {
  //   const { getByTestId } = render(<SignUpIndex />);
  //   const userNameInput = getByTestId('userName-input');
  //   const emailInput = getByTestId('email-input');
  //   const passwordInput = getByTestId('password-input');
  //   const submitBtn = getByTestId("sign-up-form-submit-btn")

  //   fireEvent.change(userNameInput, { target: { value: "testuser "} })
  //   fireEvent.change(emailInput, { target: { value: "test@example.com "} })
  //   fireEvent.change(passwordInput, { target: { value: "test123"} })
  //   fireEvent.submit(submitBtn)

  //   // global.fetch = jest.fn(() =>
  //   //     Promise.resolve({
  //   //       status: 201
  //   //   }),
  //   // ) as jest.Mock;

  //   // fetch.mockImplementationOnce(() => Promise.resolve({ status: 201 }));
  //   // fetch.mockImplementationOnce(() => Promise.reject("API is down"));

  //   // fetch.mockResolveValue(
  //   //   Promise.resolve({
  //   //     status: 201,
  //   //   })
  //   // );

  //   await waitFor(() => {
  //     expect(getByTestId("submit-message").textContent).toBe("You have finished the account registration")
  //   })

  // })

})
