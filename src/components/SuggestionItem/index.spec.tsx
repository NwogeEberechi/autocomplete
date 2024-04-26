import React from "react";
import { render, screen } from "@testing-library/react";
import { SuggestionItem } from ".";

describe("SuggestionItem", () => {
  it("renders the highlighted text correctly", () => {
    const textToHighlight = "Example Highlighted Text";
    const handleSelection = jest.fn();
    render(
      <SuggestionItem
        textToHighlight={textToHighlight}
        handleSelection={handleSelection}
        sentence={textToHighlight}
      />
    );
    const suggestionItem = screen.getByTestId("suggestion");

    expect(suggestionItem.textContent).toBe(textToHighlight);
  });

  it("has the correct CSS class", () => {
    const textToHighlight = "Example Highlighted Text";
    const handleSelection = jest.fn();
    render(
      <SuggestionItem
        textToHighlight={textToHighlight}
        handleSelection={handleSelection}
        sentence={textToHighlight}
      />
    );
    const suggestionItem = screen.getByTestId("suggestion");

    expect(suggestionItem.classList.contains("autocomplete-suggestion")).toBe(
      true
    );
  });
});
