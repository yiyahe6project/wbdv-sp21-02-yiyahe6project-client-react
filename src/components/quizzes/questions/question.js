import React, {useEffect, useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import questionsService from "../../../services/questions-service";

const Question = ({question, graded}) => {
    const [answer, setAnswer] = useState(question.answer)

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion question={question} graded={graded} updateAnswer={yourAnswer => {
                    setAnswer(yourAnswer)
                    question.answer = yourAnswer
                }}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion question={question} graded={graded} updateAnswer={yourAnswer => {
                    setAnswer(yourAnswer)
                    question.answer = yourAnswer
                }}/>
            }

        </div>

    )
}

export default Question