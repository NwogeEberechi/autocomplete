import React from "react";
import { render, screen } from "@testing-library/react";
import { ListSuggestions } from ".";

describe("ListSuggestions", () => {
  it("renders the filtered suggestions correctly", () => {
    const filteredSuggestions = [
      {
        value: "apple",
        relevance: 0.9,
        type: "fruit",
        serpapi_link: "https://example.com",
      },
      {
        value: "banana",
        relevance: 0.8,
        type: "fruit",
        serpapi_link: "https://example.com",
      },
      {
        value: "orange",
        relevance: 0.7,
        type: "fruit",
        serpapi_link: "https://example.com",
      },
    ];
    const searchTerm = "a";
    const handleSelection = jest.fn();
    render(
      <ListSuggestions
        searchResult={filteredSuggestions}
        searchTerm={searchTerm}
        handleSelection={handleSelection}
      />
    );
    expect(screen.getByTestId("suggestion-container")).toBeInTheDocument();
  });

  it("renders no suggestions when filteredSuggestions is undefined", () => {
    const filteredSuggestions = undefined;
    const searchTerm = "a";
    const handleSelection = jest.fn();
    render(
      <ListSuggestions
        searchResult={filteredSuggestions}
        searchTerm={searchTerm}
        handleSelection={handleSelection}
      />
    );

    // Verify that no suggestion items are rendered
    const suggestionItemsContainer = screen.queryByTestId(
      "suggestions-container"
    );
    expect(suggestionItemsContainer).toBeNull();
  });
});
