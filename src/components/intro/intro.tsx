import React, { useState, useEffect } from "react";
import "./intro.css";

export default function Intro() {
  const [showTextCursor, setShowTextCursor] = useState(false);
  const [sentence, setSentence] = useState("");
  const [typedWordsIndex, setTypedWordsIndex] = useState(0);
  const typedSentence = "and I LOVE programming";

  useEffect(() => {
    setTimeout(() => {
      setShowTextCursor(!showTextCursor);
    }, 500);
  }, [showTextCursor]);

  useEffect(() => {
    setTimeout(() => {
      if (typedWordsIndex >= typedSentence.length) {
        return;
      }
      let newSentence = sentence + typedSentence[typedWordsIndex];
      setTypedWordsIndex(typedWordsIndex + 1);
      setSentence(newSentence);
    }, 200);
  }, [sentence]);

  return (
    <div className="introWrap">
      <h1>Hey There,</h1>
      <h1>
        I'm <span className="introName"> Natan</span>;)
        {/* {sentence && (
          <span className="introSentence">
            <br />
            {sentence}
          </span>
        )} */}
        {showTextCursor && <span className="introTextCursor">▌</span>}
      </h1>
    </div>
  );
}
