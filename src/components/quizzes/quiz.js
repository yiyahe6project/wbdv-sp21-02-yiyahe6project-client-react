import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionsService from "../../services/questions-service";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            });
    }, [quizId])

    return (
        <div>
            <h3>Quiz</h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return (
                            <li className="list-group-item">
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;