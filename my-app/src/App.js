import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLink from "./components/ImageLink/ImageLink";
import Rank from "./components/Rank/Rank";
// import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />

      <ImageLink />
    </div>
  );
}

export default App;
