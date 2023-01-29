import React from 'react'
//import reactLogo from './assets/react.svg'
import './styles/App.css'
import StartQuiz from './components/StartQuiz'
import Questions from './components/Questions'

export default function App() {
  return (
    <div className="App">
      <StartQuiz />
      <Questions />
    </div>
  )
}

