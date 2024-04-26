import React, { useState, useEffect, useCallback } from "react";
import type { ChangeEvent } from "react";
import { fetchData } from "../../api/autocompleteAPI";
import type { Suggestions } from "../../api/autocompleteAPI";
import { useDebounce } from "../../hooks/useDebounce";
import { ListSuggestions } from "../Suggestions";
import "./index.styles.css";

export const AutoComplete: React.FC = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<Suggestions[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      fetchData()
        .then((data) => {
          const filteredData = data.suggestions.filter((item) =>
            item.value.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
          );
          setFilteredResults(filteredData);
        })
        .catch((error) => {
          // A better way will be to dispaly an error message to the user
          console.error("Error fetching data: ", error);
        });
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setsearchTerm(event.target.value);
      setShowSuggestions(true);
    },
    []
  );

  const handleSelection = useCallback((selection: string): void => {
    setsearchTerm(selection);
    setShowSuggestions(false);
  }, []);

  const renderSuggestions = useCallback(():
    | JSX.Element[]
    | JSX.Element
    | undefined => {
    if (searchTerm?.length > 0 && filteredResults?.length === 0) {
      return (
        <div className="autocomplete-suggestion">No suggestions found.</div>
      );
    }

    return (
      <ListSuggestions
        searchResult={filteredResults}
        searchTerm={searchTerm}
        handleSelection={handleSelection}
      />
    );
  }, [filteredResults, searchTerm, handleSelection]);

  return (
    <div
      className="autocomplete-container"
      data-testid="autocomplete-container"
    >
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter search key..."
        />
      </div>
      {searchTerm.length > 0 && showSuggestions ? renderSuggestions() : null}
    </div>
  );
};
