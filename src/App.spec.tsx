import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component correctly", () => {
    render(<App />);

    // Verify that the title is rendered correctly
    const titleElement = screen.getByText("Autocomplete App");
    expect(titleElement).toBeInTheDocument();

    // Verify that the AutoComplete component is rendered
    const autoCompleteElement = screen.getByRole("textbox");
    expect(autoCompleteElement).toBeInTheDocument();
  });
});
