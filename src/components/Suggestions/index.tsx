import React from "react";
import { Suggestions } from "../../api/autocompleteAPI";
import { SuggestionItem } from "../SuggestionItem";
import "./index.styles.css";

interface ListSuggestionProps {
  searchResult: Suggestions[] | undefined;
  handleSelection: (value: string) => void;
  searchTerm: string;
}

export const ListSuggestions = ({
  searchResult,
  searchTerm,
  handleSelection,
}: ListSuggestionProps): JSX.Element => {
  return (
    <div
      className="autocomplete-suggestions"
      data-testid="suggestion-container"
    >
      {searchResult?.map((item, index) => {
        return (
          <SuggestionItem
            key={index}
            textToHighlight={searchTerm}
            handleSelection={handleSelection}
            sentence={item?.value}
          />
        );
      })}
    </div>
  );
};
