import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-service";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
            setQuizzes(quizzes)
        });
    }, [courseId])

    return(
        <div>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button type="button" className="btn btn-primary float-right">Start</button>
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;