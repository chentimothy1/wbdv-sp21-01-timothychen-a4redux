import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import quizService from "../../services/quizzes-service";

const Quizzes = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        quizService.findAllQuizzes().then((theQuizzes) => setQuizzes(theQuizzes));
    }, [])

    return (
        <>
            <h1 className="m-2">
                <Link to={`/courses/table`}>
                    <i className="mr-2 fas fa-times"></i>
                </Link>
        Quizzes
      </h1>
            <div className="list-group">
                {quizzes.map((quiz) => (
                    <Link className={"list-group-item"} to={`quizzes/${quiz._id}`}>
                        {quiz.title}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Quizzes;