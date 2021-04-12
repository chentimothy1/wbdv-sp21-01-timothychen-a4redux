const QUIZZES_URL = "http://localhost:3001/api/quizzes"

export const findQuestionsForQuiz = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}

export default api;
