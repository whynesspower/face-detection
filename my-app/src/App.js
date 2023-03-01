import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLink from "./components/ImageLink/ImageLink";
import Rank from "./components/Rank/Rank";
// import Particles from "react-particles-js";
function onInputChange(event) {
  console.log(event.target.value);
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Rank />
      <Logo />

      <ImageLink onInputChange={onInputChange} />
    </div>
  );
}

export default App;
