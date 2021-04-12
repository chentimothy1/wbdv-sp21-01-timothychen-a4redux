const QUIZZES_URL = "http://localhost:3001/api/quizzes"

export const findAllQuestions = () => {
  fetch(`${QUESTIONS_URL}`).then((response) => response.json())
}

const findQuestionById = (questionId) => {
  fetch(`${QUESTIONS_URL}/${questionId}`).then((response) => response.json());
};

const findQuestionsByQuizId = (quizId) => 
  fetch(`${QUIZZES_URL}/${quizId}/questions`)
    .then( response => response.json())

const api = {
  findAllQuestions, findQuestionById, findQuestionsByQuizId,
};

export default api;