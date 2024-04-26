import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { AutoComplete } from ".";
import { fetchData, mockData } from "../../api/autocompleteAPI";

jest.mock("../../api/AutoCompleteApi", () => ({
  fetchData: jest.fn(async () => await Promise.resolve(mockData)),
}));

describe("AutoComplete", () => {
  it("fetches suggestions and displays them when user types in the input", async () => {
    render(<AutoComplete />);

    const input = screen.getByPlaceholderText("Enter search key...");
    fireEvent.change(input, { target: { value: "coffee" } });

    expect(screen.getByTestId("autocomplete-container")).toBeInTheDocument();
  });

  it('displays "No suggestions found." message when no suggestions are available', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({ suggestions: [] });

    render(<AutoComplete />);

    const input = screen.getByPlaceholderText("Enter search key...");
    fireEvent.change(input, { target: { value: "test" } });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
        expect(fetchData).toHaveBeenCalledWith();
      });
    expect(screen.getByText("No suggestions found.")).toBeInTheDocument();
  });
});
