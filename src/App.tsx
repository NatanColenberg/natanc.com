import React from "react";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="left">

      </div>
      <div className="center"><Intro /></div>
      <div className="right">
      </div>
    </div>
  );
}

export default App;
