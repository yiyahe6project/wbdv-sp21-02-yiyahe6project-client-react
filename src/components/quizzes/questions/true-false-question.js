import React, {useEffect, useState} from "react";
import "./question.css";

const TrueFalseQuestion = ({question, updateAnswer, graded}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [highlightCorrect, setHighlightCorrect] = useState("")
    const [highlightYourAnswer, setHighlightYourAnswer] = useState("")
    const trueChoice = "true";
    const falseChoice = "false";

    useEffect(() => {
        setYourAnswer(question.answer)
        if (graded) {
            setHighlightCorrect('list-group-item-success');
            if (question.answer !== question.correct) {
                setHighlightYourAnswer('list-group-item-danger');
            }
        }
    }, [])
    return (
        <div>
            <h5>{question.question}
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
                <li className={`list-group-item
                    ${(trueChoice === question.correct) ? highlightCorrect : ''}
                    ${(trueChoice === yourAnswer) ? highlightYourAnswer : ''}`}>
                    <label><input
                        onClick={() => {
                            setYourAnswer(trueChoice)
                            updateAnswer(trueChoice)
                        }}
                        type="radio"
                        disabled={graded}
                        name={question._id}/> TRUE </label>
                    {graded && trueChoice === question.correct &&
                    <>
                        <i className="fas fa-check float-right"></i>

                    </>
                    }
                    {graded && trueChoice === yourAnswer && yourAnswer !== question.correct &&
                    <>
                        <i className="fas fa-times float-right"></i>

                    </>
                    }
                </li>
                <li className={`list-group-item
                    ${(falseChoice === question.correct) ? highlightCorrect : ''}
                    ${(falseChoice === yourAnswer) ? highlightYourAnswer : ''}`}>

                    <label><input
                        onClick={() => {
                            setYourAnswer(falseChoice)
                            updateAnswer(falseChoice)
                        }}
                        type="radio"
                        disabled={graded}
                        name={question._id}/> FALSE </label>
                    {graded && falseChoice === question.correct &&
                    <>
                        <i className="fas fa-check float-right"></i>

                    </>
                    }
                    {graded && falseChoice === yourAnswer && yourAnswer !== question.correct &&
                    <>
                        <i className="fas fa-times float-right"></i>

                    </>
                    }
                </li>
            </ul>
            <p className="your-answer">
                Your answer: {yourAnswer}
            </p>
            {graded && <>Correct answer: {question.correct}</>}

        </div>
    )
}

export default TrueFalseQuestion