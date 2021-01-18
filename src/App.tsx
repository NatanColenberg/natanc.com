import React from "react";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Card from "./components/card/card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="left">
        <Intro />
      </div>
      <div className="center"></div>
      <div className="right">
        <Card />
      </div>
    </div>
  );
}

export default App;
