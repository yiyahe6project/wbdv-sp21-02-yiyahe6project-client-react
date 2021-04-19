
const QUESTIONS_URL = 'http://localhost:4000/api';
const findQuestionsForQuiz = (qzid) => {
    return fetch(`${QUESTIONS_URL}/quizzes/${qzid}/questions`)
        .then(response => response.json())
}
const findAllQuestions = () => {
    return fetch(`${QUESTIONS_URL}/questions`)
        .then(response => response.json())
}
const findQuestionById = (qid) => {
    return fetch(`${QUESTIONS_URL}/questions/${qid}`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz, findQuestionById, findAllQuestions
}