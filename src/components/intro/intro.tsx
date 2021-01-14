import { useState, useEffect } from "react";
import "./intro.css";

export default function Intro() {
  const [showTextCursor, setShowTextCursor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTextCursor(!showTextCursor);
    }, 500);
  }, [showTextCursor]);

  return (
    <div className="introWrap">
      <h1>Hello World,</h1>
      <h1>
        I'm <span className="introName"> Natan</span>;)
        {showTextCursor && <span className="introTextCursor">▌</span>}
      </h1>
    </div>
  );
}
