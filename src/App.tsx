import React, { useState } from 'react';
import QuizCard from './Components/QuizCard';
import {Quiz_type} from './Types/Quiz_Types'
import {Getquizdetail} from './Services/Api'


export type Answer_object={
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const Total_question = 10
function App() {
  let [quiz, setquiz]=useState<Quiz_type[]>([]);
  let [currentStep, setcurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [loading, setLoading] = useState(false);
  let [useranswer, setUserAnswer] = useState<Answer_object[]>([]);
  let [gameOver, setGameOver] = useState(true);
  //let [quizcompleted, setQuizCompleted]=useState(false)
  
    const Startquiz = async()=>{
        setLoading(true);
        setGameOver(false)
      const questions = await Getquizdetail(Total_question,'easy');
      console.log(questions);
      setquiz(questions)
      setScore(0);
      setUserAnswer([]);
      setcurrentStep(0);
      setLoading(false);
    };
    
 const checkAnswer = (e:any)=>{
     if (!gameOver){
    const answer = e.currentTarget.value;
    const correct = quiz[currentStep].correct_answer === answer;
        if (correct) setScore(++score)
    const answerObject = {
        question: quiz[currentStep].question,
        answer,
        correct,
        correctAnswer:quiz[currentStep].correct_answer,
    };
    setUserAnswer((score)=>[...score, answerObject]);
     }
 }
  
 const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = currentStep + 1;

    if (nextQ === quiz.length) {
      setGameOver(true)
      
    } else {
      setcurrentStep(nextQ)
      
      
    }
  };
  
  
  return (
      
    <div>
        <h1>React Quiz</h1>
        {gameOver || useranswer.length === Total_question ? (
          <button className='start' onClick={Startquiz}>
            Start
          </button>
        ) : null}
        
        {!gameOver ? <p>Score:{score}</p>:null}
        {loading ? <p>Loading Questions...</p>:null}
        
        {!loading && !gameOver && (
      <QuizCard
      options={quiz[currentStep].options}
      question={quiz[currentStep].question}
      callback={checkAnswer}
      userAnswer= {useranswer ? useranswer[currentStep]:undefined}
      questionNr={currentStep +1}
      totalQuestions={Total_question}
      />
      )}
      {!gameOver && !loading && useranswer.length === currentStep + 1 && currentStep !== Total_question - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
    </div>
  );
}

export default App;
