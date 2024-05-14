import React, { useState } from "react";

const CensoredText = ({ text, censoredWords }) => {
  const [isCensored, setIsCensored] = useState(true);

  const revealCensoredText = () => {
    setIsCensored(!isCensored);
  };

  const censorText = () => {
    let censoredText = text;
    censoredWords.forEach((word) => {
      // Use regex to match whole words and replace them with asterisks
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      censoredText = censoredText.replace(regex, "*".repeat(word.length));
    });
    return censoredText;
  };

  return (
    <div>
      <span onClick={revealCensoredText}>
        {isCensored ? censorText() : text}
      </span>
    </div>
  );
};

export default CensoredText;
