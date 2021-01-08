import React from "react";
import BackgroundImg from "./img/background.jpg";
import Intro from "./components/intro/intro";
import Card from "./components/card/card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <Card />
    </div>
  );
}

export default App;
