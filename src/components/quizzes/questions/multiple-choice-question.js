import React, {useState} from "react";
import "./question.css";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [highlightCorrect, setHighlightCorrect] = useState("")
    const [highlightYourAnswer, setHighlightYourAnswer] = useState("")
    const [graded, setGraded] = useState(false)

    return (
        <div>
            <h5>
                {question.question}
                {
                    graded && question.correct === yourAnswer &&
                    <i className="fas fa-check float-right" style={{color: "green"}}></i>
                }
                {
                    graded && question.correct !== yourAnswer &&
                    <i className="fas fa-times float-right" style={{color: "red"}}></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item 
                                            ${(choice === question.correct) ? highlightCorrect : ''} 
                                            ${(choice === yourAnswer) ? highlightYourAnswer : ''}`}>
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                    }}
                                    type="radio"
                                    disabled={graded}
                                    name={question._id}/> {choice} </label>
                                {graded && choice === question.correct &&
                                <>
                                    <i className="fas fa-check float-right"></i>

                                </>
                                }
                                {graded && choice === yourAnswer && yourAnswer !== question.correct &&
                                <>
                                    <i className="fas fa-times float-right"></i>

                                </>
                                }


                            </li>
                        )
                    })
                }
            </ul>
            <p className="your-answer">
                Your answer: {yourAnswer}
            </p>
            <button type="button"
                    onClick={() => {
                        setHighlightCorrect('list-group-item-success');
                        setGraded(true)
                        if (yourAnswer !== question.correct) {
                            setHighlightYourAnswer('list-group-item-danger');
                        }
                    }}
                    className="btn btn-success">Grade
            </button>

        </div>
    )
}

export default MultipleChoiceQuestion