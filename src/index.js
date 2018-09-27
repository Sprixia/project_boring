import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./navbar.js";
// hi test
// https://stackoverflow.com/questions/31758081/loading-json-data-from-local-file-into-react-js
import data from "./data.json";

import "./styles.css";

// ES5 shuffling code, taken verbatim from
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function App() {
  let index = Math.floor(Math.random() * data.length);
  let operand1 = Math.floor(Math.random() * 5) + 1;
  let operand2 = Math.floor(Math.random() * 5) + 1;
  const answer = [
    operand1 + operand2,
    operand1 - operand2,
    operand1 * operand2,
    operand1 / operand2
  ];
  let answerIndexes = [0, 1, 2, 3];
  shuffle(answerIndexes);
  return (
    <div className="App">
      <NavBar />
      <h1>SIMMER</h1>
      <h2>
        What is {operand1} + {operand2}?
      </h2>
      <ul>
        <li>{answer[answerIndexes[0]]}</li>
        <li>{answer[answerIndexes[1]]}</li>
        <li>{answer[answerIndexes[2]]}</li>
        <li>{answer[answerIndexes[3]]}</li>
      </ul>
      <hr />
      <ul>
        {/*
          data.map(function (movie) {
            return <li>{movie.id} - {movie.title}</li>;
          })
          */
        data.map(movie => (
          <li>
            {movie.id} - {movie.title}
          </li>
        ))}
      </ul>
      <hr />
      <p>{data[index].id}</p>
      <p>{data[index].title}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
