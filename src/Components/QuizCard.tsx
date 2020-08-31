import React from 'react';
import {Answer_object} from '../App';
import { Wrapper, ButtonWrapper } from './QuizcardStyles';
type quizPropsTypes={
    question:string
    options:string[]
    callback:(e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: Answer_object | undefined;
    questionNr: number;
    totalQuestions: number;
}


const QuizCard:React.FC<quizPropsTypes> = ({question, options,questionNr,totalQuestions,userAnswer, callback}) =>{
    
    return(
        
        <Wrapper>
            <p>Question: {questionNr}/{totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html:question}}/>
            <div>
                {options.map((answer)=>(
                    <ButtonWrapper
                    key={answer}
                    correct={userAnswer ?.correctAnswer === answer}
                    userClicked={userAnswer ?.answer === answer}
                    >
                    <button disabled={userAnswer ? true: false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}
export default QuizCard;