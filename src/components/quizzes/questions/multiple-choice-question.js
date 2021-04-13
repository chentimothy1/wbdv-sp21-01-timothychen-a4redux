// Citation: https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/,
//           https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js
//           https://kodaps.com/creating-a-quiz-app-with-react-hooks-and-typescript-part-1-a-simple-math-quiz-f33bfe27098a


import React from "react";

const MultipleChoiceQuestion = ({ q, setChosenAnswer, chosenAnswer }) => {
  return (
    <>
      <>
        <div className="list-group">
          {q.choices.map((option) => (
            <label
              className={`list-group-item

              {/* implements highlighting upon right or wrong answer */}
              ${chosenAnswer !== null && q.correct === option && chosenAnswer === option
                  ? "list-group-item-success"
                  : ""
                }
              ${chosenAnswer !== null && q.correct === option && chosenAnswer !== option
                  ? "list-group-item-success"
                  : ""
                }
              ${chosenAnswer !== null && q.correct !== option && chosenAnswer === option
                  ? "list-group-item-danger"
                  : ""
                }
            `}
            >
              <input
                type="radio"
                name={q._id}
                onClick={() => setChosenAnswer(option)}
              />
              {option}

              {/* handles green checkmark and red x mark next to the answers */}
              {chosenAnswer !== null && q.correct === option && chosenAnswer === option && (
                <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
              )}
              {chosenAnswer !== null && q.correct === option && chosenAnswer !== option && (
                <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
              )}
              {chosenAnswer !== null && q.correct !== option && chosenAnswer === option && (
                <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
              )}
            </label>
          ))}
        </div>
      </>
    </>
  );
};

export default MultipleChoiceQuestion;