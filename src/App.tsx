import React, {useEffect, useState} from 'react';
// components
import Header from './components/Header'
import Game from './components/Game'
// helpers
import quizQuestions from './functions/quizQuestions';

  export const App:React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([]);

  useEffect(() => {

    async function startGame () {
      // reset the game
      setLoading(true)
      setScore(0)
      setGameOver(false)

      // get the questions
      const newQuestions = await quizQuestions()
      setQuestions(newQuestions)

      //start the game
      setLoading(false)
    }

    startGame()

  }, [])

  function newQuestion () {
    const idx = Math.floor(Math.random()*questions.length)
    setQuestion(questions.splice(idx, 1)[0])
  }

  return (
    <div>
      <Header />
      <button onClick={newQuestion}>Next</button>
      <Game
        question={question}
      />
    </div>
    //  <Controls />
     /* <button className='playQuiz-btn' onClick={startGame}>
       PlayQuiz
     </button> */
  );
  



}

export default App;
// if 'export const App:any = () => {' if used, add this. 

// export {}
// if document is empty, add this.



//EXTRAS

// type Props = {
//     setTimeInSeconds: Function
// }

// export default function buttonControls(props:Props) {
//     const { setTimeInSeconds } = props;
//     const [intervalId, setIntervalId] = useState<number>(0);

//     const playQuizButton = (e: object) => {
//         const interval:any = setInterval(() => {
//             setTimeInSeconds((previousState:number) => previousState + 1);
//         }, 1000);

//         setIntervalId(interval);
//     }

//     const pauseButton = () => {
//         clearInterval(intervalId);
//     }

//     const resetButton = () => {
//         clearInterval(intervalId);
//         setTimeInSeconds(0);
//     }

    // return(
    //   <title>Country Game</title>
    //   </head>
    //     <body> 




    //       <div> 
    //         <div type="button" class="timer-buttons">

    //           <button onClick={playQuizButton} type="button">
    //             <span class="playQuiz-btn">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
    //                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
    //                 </svg>
    //             </span>
    //           </button>

    //           <button onClick={resetButton} type="button">
    //             <span class="reset-btn">
    //               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
    //                 <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
    //                 <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
    //               </svg>
    //             </span>
    //           </button>

    //         </div>
    //       </div>


    //       <div class="form-group">
    //         <label for="answers" class="form-label mt-4">Enter Answer:</label>
    //         <input type="text" class="form-control" id="answerBox" placeholder='Type In Your Answer'>
    //         <small id="answerBox" class="form-text text-muted">No Cheating!</small>
    //       </div>



              {/* <button onClick={pauseButton} type="button">
                <span>

                </span>
              </button> */}



    //     </body>
    // );
// }