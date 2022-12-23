import React,{useState} from 'react'
import questions from './QuizQuestion'

export default function QuizApp() {
   const [currentQuestion, setCurrentQuestion] = useState(0)
   const [showScore,setShowScore] = useState(false)
   const[score ,setScore] = useState(0)
  
    const handleAnswerOptionClick = (userSelectedOption)=>{
    // userSelectedOption =   true
     if(userSelectedOption){
         setScore(prevScore=>prevScore+1)  //score = 1
     }
     
    const nextQuestion = currentQuestion + 1 //0+1 = 1
    if(nextQuestion < questions.length){     // 1 < 2
        setCurrentQuestion(nextQuestion)     //currentQuestion = 1
    }
    else{
        setShowScore(true)
    }


    }
  return (
    <div>
        {
            showScore?(
                 <div>
                      You Scored {score} out of {questions.length}
                 </div>
            ):(
                
                <div>
                     <span>Question {currentQuestion + 1}</span>/{questions.length}                             
                 
                     <div>{questions[currentQuestion].questionText}</div>            
                     {/* {questions[0].questionText}< */}
                     {
                        questions[currentQuestion].answerOptions.map((option,index)=>(
                            //option =  {answerText:'New York' , isCorrect: false},                         
                                <button key={index} onClick={()=>handleAnswerOptionClick(option.isCorrect)}>
                                     {option.answerText}
                               </button>
                               //{()=>handleAnswerOptionClick(true)}
                                
                        ))
                     }
              
                </div>
               
            )

              
        }
    </div>
  )
}
