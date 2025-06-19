import React from 'react'
import {useState,useCallback} from 'react'
import Questions from '../questions.js'
import CompletedImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx"
const Quiz = () => {
    const [userAnswers,setUserAnswers ] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const handleSelectAnswer=(answers)=>{
        setUserAnswers((prev)=>{
            return [...prev, answers];
        });
    }
    const isquizCompleted = activeQuestionIndex === Questions.length;
    const handleSkipAnswer=useCallback(()=>handleSelectAnswer(null),[])
    if (isquizCompleted) {
      return (
        <div id="summary">
          <img src={CompletedImg} alt="" />
          <h2>Quiz has been Completed!</h2>
        </div>
      );
    }
    const suffledAnswer = [...Questions[activeQuestionIndex]?.answers];
    suffledAnswer.sort(()=>Math.random()-0.5);
    
    
  return (
    <div id="quiz">
      <div id="questions">
        <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
        <h2>{Questions[activeQuestionIndex]?.text || "No more Questions"}</h2>

        <ul id="answers">
          {suffledAnswer.map((answers) => (
            <li key={answers} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answers);
                }}>
                {answers}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz
