import React, { useState } from 'react'
import './quiz.css'
import questions from './quiz.json'

export default function Quiz() {
  /* Create State for question index */
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [finalAttempt, setFinalAttempt] = useState([]);

  function handleAnswerClick(answerId, questionObj) {

    setFinalAttempt((result)=>[...result, {questionId:questionObj.questionID, answerId }])

    if(currentIndex + 1 == questions.length) {
      // If yes, set the quizFinished variable to true
              setQuizFinished(true);
          } else {
      // If no, increment the current index like always
      setCurrentIndex((value) => value + 1)
          }
    }


	return (
		<div className="app">
			{quizFinished ? (
				<div className="score-section">
					Quiz Submitted
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							
							<span>{currentIndex +1 }</span>/{questions.length}
						</div>
						{/* HINT: You can access first question using questions[0] */}
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
					{JSON.stringify(finalAttempt)}
                {questions[currentIndex].answers.map((answer) => {
                  // Add onClick listener to this button
                  return (
                    <button key={answer.answerText}
                      onClick={() => handleAnswerClick(answer.answerID , questions[currentIndex])}
                    >
                      {answer.answerText}
                    </button>
                  )
                })}
					</div>
				</>
			)}
		</div>
	)
}