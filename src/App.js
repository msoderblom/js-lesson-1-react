import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My react app</h1>

        <p>This is my second react app</p>
        <MyButton title="Tryck här"></MyButton>
        <MyButton title="Read more"></MyButton>
        <a
          className="App-link"
          href="https://github.com/msoderblom"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
