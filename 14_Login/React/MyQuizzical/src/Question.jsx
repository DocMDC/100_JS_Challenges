import React from "react"

export default function Question (props) {    
    console.log(props.questionData)

    const questionEl = props.questionData.map((question) => {
        return (
            <div>
                <h1>{question.question}</h1>
                {question.choices.map((choice) => {
                    return (
                        <h4>{choice}</h4>
                    )
                })}
            </div>
        )
    })
    return (
        <div>
            {questionEl}
        </div>
    )
}