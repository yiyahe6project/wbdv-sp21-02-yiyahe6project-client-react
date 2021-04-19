import React, {useEffect, useState} from "react";
import Question from "./questions/question";


const Attempt = (answers) => {
    return (
        <div>
            <ul className="list-group" >
                {
                    answers.answers.map((question) => {
                        return (
                            <li className="list-group-item" key={question._id}>
                                <Question question={question} graded={true}/>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Attempt
