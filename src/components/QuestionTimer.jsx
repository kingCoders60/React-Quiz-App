import React from 'react'
import {useState,useEffect} from "react"
const QuestionTimer = ({timeout,onTimeout}) => {
    const [remainingTime,setRemainingTime] = useState(timeout);

    useEffect(()=>{
        setTimeout(onTimeout, timeout);
    },[timeout,onTimeout]) //This will work if any  of the timeout or settimeout changes..
    useEffect((()=>{
        setInterval(() => {
          setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }),[])
    

  return (
    
      <progress id="question-time" max={timeout} value={remainingTime}/>
    
  )
}

export default QuestionTimer
