// Citation: https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/,
//           https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js
//           https://kodaps.com/creating-a-quiz-app-with-react-hooks-and-typescript-part-1-a-simple-math-quiz-f33bfe27098a

import React, { useState } from "react";
import MultipleChoiceQuestion from "./multiple-choice-question";
import TrueFalseQuestion from "./true-false-question";

const Question = ({ q }) => {
    const [answer, setChosenAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [chosenAnswer, confirmChosenAnswer] = useState(null);

    const Grade = () => {
        confirmChosenAnswer(answer);
        if (answer === q.correct) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <>
            <h4>
                {q.question}
                {isCorrect === true && (
                    <i style={{ color: "green" }} className="ml-2 fas fa-check"></i>
                )}
                {isCorrect === false && (
                    <i style={{ color: "red" }} className="ml-2 fas fa-times"></i>
                )}
            </h4>

            {q.type === "MULTIPLE_CHOICE" && (
                <MultipleChoiceQuestion q={q} setChosenAnswer={setChosenAnswer} chosenAnswer={chosenAnswer} />
            )}
            {q.type === "TRUE_FALSE" && (
                <TrueFalseQuestion q={q} setChosenAnswer={setChosenAnswer} chosenAnswer={chosenAnswer} />
            )}
            <button className={`btn btn-success mt-2 ml-6`} onClick={() => Grade()}>
                Grade
        </button>
        </>
    );
};

export default Question;