import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import List from "./components/List";
import ProgressBar from "./components/ProgressBar";
import ImgCard from "./components/ImgCard";

const myList = ["Blue", "Red", "Green", "Yellow"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My react app</h1>

        <p>This is my second react app</p>
        <MyButton title="Tryck här"></MyButton>
        <MyButton title="Read more"></MyButton>
      </header>
      <a
        className="App-link"
        href="https://github.com/msoderblom"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
      <ProgressBar percent="25"></ProgressBar>
      <ProgressBar percent="75"></ProgressBar>

      <ImgCard
        img="https://source.unsplash.com/_r6w0R6SueQ"
        text="The bear is a big animal."
      ></ImgCard>
      <List arr={myList}></List>
    </div>
  );
}

export default App;
