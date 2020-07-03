import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <div className="App"></div>
      <Greet name="Ramya" last="Dhanushkodi"></Greet>
      <Greet name="Person 2">ChildrenProperty</Greet>

      <Welcome name="Class - 1">Wowowowow</Welcome>
      <Message></Message>
      <Counter></Counter>
    </>
  );
}

export default App;
