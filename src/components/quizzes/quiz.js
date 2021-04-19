import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom"
import Question from "./questions/question";
import questionsService from "../../services/questions-service";
import quizzesService from "../../services/quizzes-service";

const Quiz = () => {

    const {quizId} = useParams()
    const history = useHistory()
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState([])

    useEffect(() => {
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [quizId]);

    useEffect(() => {
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                setQuiz(quiz)
            });
    }, [])


    return (
        <div>
            <h3>{quiz.title}</h3>
            <ul className="list-group" >
                {
                    questions.map((question) => {
                        return (
                                <li className="list-group-item" key={question._id}>
                                    <Question question={question} graded={false}/>
                                </li>

                        )
                    })
                }
            </ul>

            <button type="button"
                    onClick={() => {
                        quizzesService.submitQuiz(quizId, questions)
                        history.goBack();
                    }}
                    className="btn btn-success float-right mt-3">Submit
            </button>
        </div>
    )
}

export default Quiz
