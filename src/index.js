import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./navbar.js";
// hi test
// https://stackoverflow.com/questions/31758081/loading-json-data-from-local-file-into-react-js
import "./styles.css";

// ES5 shuffling code, taken verbatim from
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

function Home() {
  return (
    <div className="App">
      <NavBar />
      <h1>HOME</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NavBar />, rootElement);

export default Home;
