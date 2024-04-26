import { highlightText } from "./utils";

describe("highlightText", () => {
  it("highlights the specified text in the sentence", () => {
    const sentence = "This is a sample sentence for testing.";
    const textToHighlight = "sample";
    const expectedOutput =
      "This is a <span class='highlight'>sample</span> sentence for testing.";

    const result = highlightText(sentence, textToHighlight);

    expect(result).toBe(expectedOutput);
  });

  it("handles case-insensitive highlighting", () => {
    const sentence = "This is a sample sentence for testing.";
    const textToHighlight = "THIS";
    const expectedOutput =
      "<span class='highlight'>This</span> is a sample sentence for testing.";

    const result = highlightText(sentence, textToHighlight);

    expect(result).toBe(expectedOutput);
  });

  it("handles multiple occurrences of the text to highlight", () => {
    const sentence =
      "This is a sample sentence for testing. This sample should be highlighted.";
    const textToHighlight = "sample";
    const expectedOutput =
      "This is a <span class='highlight'>sample</span> sentence for testing. This <span class='highlight'>sample</span> should be highlighted.";

    const result = highlightText(sentence, textToHighlight);

    expect(result).toBe(expectedOutput);
  });

  it("returns the original sentence if the text to highlight is not found", () => {
    const sentence = "This is a sample sentence for testing.";
    const textToHighlight = "missing";

    const result = highlightText(sentence, textToHighlight);

    expect(result).toBe(sentence);
  });
});
