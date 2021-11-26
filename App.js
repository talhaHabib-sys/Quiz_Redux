import './App.css'
import Question from './question.js'
import React,{useState,useEffect}  from 'react';
import Axios from 'axios'
import {useSelector} from 'react-redux'
function App() {
  const st = useSelector((state)=>state)
  const [question,setquestion]=useState([]);
  const [currentIndex,setIndex]=useState(0);
  const [score,setscore]=useState(0)
  const [showanswer,setanswer]=useState(false)
  useEffect(()=>{
    Axios.get(st)
    .then((res)=>res.data)
    .then(data=>{
      const questions=data.results.map((question)=>({
        ...question,
        answers:[question.correct_answer,...question.incorrect_answers].sort(()=>Math.random()-0.5)
      }
      )
    )
    setquestion(questions)
  })
}
  ,[])
  
  const Hand=(answer)=>{
    if(!showanswer)
  {
    if(answer===question[currentIndex].correct_answer)
    {
      setscore(score+1)
    }
  }
    setanswer(true)

  }
  const han=()=>{
    setIndex(currentIndex+1)
    setanswer(false)
  }
  
  return(
    question.length > 0 ? (<div className="container"> {currentIndex >= question.length ? (<h1> game end score is {score}</h1>):(<Question Hand={Hand} han={han} showanswer={showanswer} data={question[currentIndex]}/>)}</div>)
  :(<div className="container">...loading</div>)

  );
}

export default App;
