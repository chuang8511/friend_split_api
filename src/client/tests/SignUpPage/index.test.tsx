// to be write the correct test
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUpIndex from "../../SignUpPage";

describe("SignUpIndex Component", () => {
  test("Succeed to create an account", async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true })
    });

    const logSpy = jest.spyOn(global.console, 'log');

    (global as any).fetch = mockFetch

    const { getByText } = render(<SignUpIndex />)

    fireEvent.submit(getByText("Submit"));

    await Promise.resolve();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userName: "", email: "", password: "" })
    });  
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith("Data saved successfully!")
    
  })

  test("Failed to create an account", async() => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error"
    });
    const logSpy = jest.spyOn(global.console, "error");

    (global as any).fetch = mockFetch

    const { getByText } = render(<SignUpIndex />)

    fireEvent.submit(getByText("Submit"));

    await Promise.resolve();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userName: "", email: "", password: "" })
    });  
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith("Error saving data:", "Failed to save data")

  })
});
