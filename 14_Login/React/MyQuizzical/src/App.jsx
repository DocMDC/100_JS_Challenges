import React, {useState, useEffect} from "react"
import Menu from "./Menu"
import Question from "./Question"
import {nanoid} from "nanoid"

export default function App() {
    const [isStarted, setIsStarted] = useState(false)
    const [questions, setQuestions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    function startQuiz() {
        setIsStarted(prev => !prev)
    }

    const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

    useEffect(() => {
        
        async function getData() {
            setIsLoading(true)
            const response = await fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
            const data = await response.json()

            let questionsArray = []
            data.results.forEach(question => {
                questionsArray.push({
                    id: nanoid(),
                    question: question.question,
                    choices: shuffleArray([question.correct_answer, ...question.incorrect_answers]),
                    correct: question.correct_answer,
                    selected: false,
                    checked: false
                })
            })
            setQuestions(questionsArray)
            setIsLoading(false)
        }
        getData()
    }, [])

    function handleSelectAnswer() {
        console.log('success')
    }

    const questionEl = questions.map((item) => {
        return (
            <Question 
                key={item.id}
                questionData={questions}
                selectAnswer={handleSelectAnswer}
                question={item.question}
            />
        )
    })

    return (
        <>
            {isLoading ? <h1>loading...</h1> : 
                <div className='app-container'>
                {isStarted === true ? 
                questionEl
                : 
                <Menu 
                    handleClick={startQuiz}
                />}
                </div>
            }
            
        </>
    )
}