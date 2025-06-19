import React from 'react'
import {useState} from 'react'
import Questions from '../questions.js'
import CompletedImg from '../assets/quiz-complete.png';
const Quiz = () => {
    const [userAnswers,setUserAnswers ] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const handleSelect=(answers)=>{
        setUserAnswers((prev)=>{
            return [...prev, answers];
        });
    }
    const isquizCompleted = activeQuestionIndex === Questions.length;
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
    <div id="questions">
      <h2>{Questions[activeQuestionIndex]?.text || "No more Questions"}</h2>
      <ul id="answers">
        {suffledAnswer.map((answers)=>(
            <li key={answers} className="answer">
                <button onClick={()=>{
                    handleSelect(answers)
                }}>{answers}</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz
