import "./App.css";
import React, { Component } from "react";
import Header from "./component/Header";
import firebase from "firebase/app";
import Notes from "./component/Notes";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Notes />
      </main>
    </div>
  );
}

export default App;
