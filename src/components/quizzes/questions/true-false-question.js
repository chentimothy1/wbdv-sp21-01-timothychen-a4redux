// Citation: https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/,
//           https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js
//           https://kodaps.com/creating-a-quiz-app-with-react-hooks-and-typescript-part-1-a-simple-math-quiz-f33bfe27098a


import React from "react";

const TrueFalseQuestion = ({ q, setChosenAnswer, chosenAnswer }) => {
  return (
    <>
      <div className="list-group">
        {/* TRUE */}
        <label
          className={`list-group-item 
          ${q.correct === "true" && chosenAnswer === "true"
              ? "list-group-item-success"
              : ""
            } 
          ${q.correct === "true" && chosenAnswer === "false"
              ? "list-group-item-success"
              : ""
            }
          ${q.correct === "false" && chosenAnswer === "true"
              ? "list-group-item-danger"
              : ""
            }
          `}
        >

          <input
            type="radio"
            name={q._id}
            onClick={() => setChosenAnswer("true")}
          />
          True

          {q.correct === "true" && chosenAnswer === "true" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "true" && chosenAnswer === "false" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "false" && chosenAnswer === "true" && (
            <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
          )}
        </label>

        {/* FALSE */}
        <label
          className={`list-group-item ${q.correct === "false" && chosenAnswer === "false"
            ? "list-group-item-success"
            : ""
            } 
          ${q.correct === "false" && chosenAnswer === "true"
              ? "list-group-item-success"
              : ""
            }
          ${q.correct === "true" && chosenAnswer === "false"
              ? "list-group-item-danger"
              : ""
            }
          `}
        >

          <input
            type="radio"
            name={q._id}
            onClick={() => setChosenAnswer("false")}
          />
          False

          {q.correct === "false" && chosenAnswer === "false" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "false" && chosenAnswer === "true" && (
            <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
          )}
          {q.correct === "true" && chosenAnswer === "false" && (
            <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
          )}
        </label>
      </div>
    </>
  );
};

export default TrueFalseQuestion;