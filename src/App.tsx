import React, { useEffect, useState } from 'react';
import { BrowserRouter,  Route, Routes} from 'react-router-dom';
import './App.css';
import { QuizHome } from './Components/QuizHome';
import { QuizPage } from './Components/QuizPage';
import getData from './Services/QuizData';

function App() {
  const [quiz , setQuiz]=useState<any>()
  let [difficulty, setDifficulty]=useState("easy")
  let [category, setCategory]=useState<number>(9)
  useEffect(()=>{
    async function quizData(total_question:number,category:number,difficulty:string){
      const data=await getData(total_question,category,difficulty)
      setQuiz(data) 
    }
    quizData(10, category ,difficulty)
  },[category,difficulty])

  function handleDifficulty(e:React.FormEvent<EventTarget>,diff:string){
    e.preventDefault();
    setDifficulty(diff)
  }
  function handleCategory(num:number){
    setCategory(num)
  }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizHome DifficultyCallBack={handleDifficulty} CategoryCallBack={handleCategory}></QuizHome>}></Route>
          <Route path="/quiz" element={<QuizPage quiz={quiz}></QuizPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
