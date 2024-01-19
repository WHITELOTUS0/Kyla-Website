import React, { useState } from 'react'
import './quiz.css'
import questions from './quiz.json'
import TopBar from '../Design1/TopBar'
import Footer from "../Design1/Footer"
import { errorNotification, notify } from '../../Toasts/Toast'
import { axiosInstance } from '../../http/http'
import { useNavigate } from 'react-router-dom';

const headers = {
  "Content-Type": "application/json",
  // Authorization: `Bearer ${token}`
}

export default function Quiz() {
  const navigate = useNavigate();
  /* Pull User Id from Local Storage */
  const loggedInUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

  const axiosCall = axiosInstance(headers);
  /* Create State for question index */
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [score, setScore] = useState(0)
  const [finalAttempt, setFinalAttempt] = useState([]);

  const handleQuizSubmit = async () => {
    try {
      const response = await axiosCall.post('quiz', {
        userId: loggedInUser.id,
        attemptedQuiz: finalAttempt
      })

      console.log('response', response)
      notify(response.data.message)
      navigate('/index');
    } catch (error) {
      console.log('error', error)
      errorNotification("Something Went Wrong")
    }
  }

  function handleAnswerClick(answerId, questionObj) {

    setFinalAttempt((result) => [...result, { questionId: questionObj.questionID, answerId }])

    if (currentIndex + 1 == questions.length) {
      // If yes, set the quizFinished variable to true
      setQuizFinished(true);
    } else {
      // If no, increment the current index like always
      setCurrentIndex((value) => value + 1)
    }
  }


  return (
    <div className='quizBody'>
      <div className='bar'>
        <TopBar />
      </div>
      <div className='appBody'>
        <div className="app">
          {quizFinished ? (
            <div className="score-section">
              Please Submit quiz
              <button onClick={handleQuizSubmit}>Submit Quiz</button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">

                  <span>{currentIndex + 1}</span>/{questions.length}
                </div>
                {/* HINT: You can access first question using questions[0] */}
                <div className="question-text">
                  {questions[currentIndex].questionText}
                </div>
              </div>
              <div className="answer-section">
                {/* {JSON.stringify(finalAttempt)} */}
                {questions[currentIndex].answers.map((answer) => {
                  // Add onClick listener to this button
                  return (
                    <button key={answer.answerText}
                      onClick={() => handleAnswerClick(answer.answerID, questions[currentIndex])}
                    >
                      {answer.answerText}
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )}