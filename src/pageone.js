import React from "react";
import data from "./data.json";
import "./styles.css";

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

function PageOne() {
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
      <h1>PAGE 1</h1>
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
        {data.map(movie => (
          <li>
            {movie.id} - {movie.title}
          </li>
        ))}
      </ul>
      <hr />
      <p>{data[index].id}</p>
      <p>{data[index].title}</p>

      <h1>END PAGE 1</h1>
    </div>
  );
}

export default PageOne;
/*
The function PageOne is what "displays" this page, so that's what we export.
*/
