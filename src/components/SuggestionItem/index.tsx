import React, { useMemo } from "react";
import { highlightText } from "../../utils/utils";
import "./index.styles.css";

interface SuggestionItemProps {
  handleSelection: (value: string) => void;
  textToHighlight: string;
  sentence: string;
}

export const SuggestionItem: React.FC<SuggestionItemProps> = ({
  textToHighlight,
  sentence,
  handleSelection,
}: SuggestionItemProps): JSX.Element => {
  const highlightedText = useMemo(() => {
    return highlightText(sentence, textToHighlight);
  }, [sentence, textToHighlight]);

  return (
    <div
      className="autocomplete-suggestion"
      onClick={() => {
        handleSelection(sentence);
      }}
      dangerouslySetInnerHTML={{ __html: highlightedText }}
      data-testid="suggestion"
    />
  );
};
