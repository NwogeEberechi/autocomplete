export const highlightText = (
    sentence: string,
    textToHighlight: string
  ): string => {
    const regex = new RegExp(`(${textToHighlight})`, "gi");
    return sentence.replace(regex, "<span class='highlight'>$1</span>");
  };
  