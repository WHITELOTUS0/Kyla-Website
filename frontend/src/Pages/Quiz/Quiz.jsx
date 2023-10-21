import React, { useState } from 'react'
import './quiz.css'

export default function Quiz() {
  /* Create State for question index */
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [score, setScore] = useState(0)


	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

  function handleAnswerClick(isCorrect) {

    		// Check if correct answer is pressed. (See the hint on the left)
        if(isCorrect) {
          setScore((score) => score + 1);
      }

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
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question 1</span>/{questions.length}
						</div>
						{/* HINT: You can access first question using questions[0] */}
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
                {questions[currentIndex].answerOptions.map((answer) => {
                  // Add onClick listener to this button
                  return (
                    <button key={answer.answerText}
                      onClick={() => handleAnswerClick(answer.isCorrect)}
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