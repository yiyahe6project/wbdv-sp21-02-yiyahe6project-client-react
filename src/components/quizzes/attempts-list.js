import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-service";
import Attempt from "./attempt";
import {Accordion, Card, Button} from 'react-bootstrap';

const AttemptsList = () => {
    const {quizId} = useParams()
    const [attempts, setAttempts] = useState([])
    useEffect(() => {
        quizzesService.findAttemptsForQuiz(quizId)
            .then(attempts => {
                setAttempts(attempts)
            });
    }, [quizId])

    return(

        <div>
            <h2>Attempts</h2>
            <Accordion>
                {
                    attempts.map((attempt, idx) =>  {
                        return(
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={`${idx+1}`}>
                                        <h4>
                                            <span className="name">Attempt {`${idx+1}`} - </span>
                                            <span className="score">Total score: {attempt.score}</span>
                                        </h4>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={`${idx+1}`}>
                                    <Card.Body>
                                        <Attempt answers={attempt.answers}/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                    )})
                }
            </Accordion>
        </div>
    );
}

export default AttemptsList;