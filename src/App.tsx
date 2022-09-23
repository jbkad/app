import React, {useEffect, useState} from 'react';
// components
import Header from './components/Header'
import Game from './components/Game'
import Score from './components/Score'
import Timer from './components/Timer'
import Answers from './components/Answers'
// helpers
import quizQuestions from './functions/quizQuestions';

  const App:React.FC = () => {

  const [loading, setLoading] = useState(false);
  let [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(null);

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

  const checkAnswer = (question: any, userAnswer: string) => {
    const correct: boolean = question.name.common == userAnswer
    if (correct) {
      setScore(score + 1)
      newQuestion()
    }
    return correct
  };

  function newQuestion () {
      const idx = Math.floor(Math.random()*questions.length)
      setQuestion(questions.splice(idx, 1)[0])
    }  

  return (
    <>
      <Header />
        <div className="items-center container">
          <Score score={score} />
        <br></br>
          {/* <Timer />
        <br></br> */}
          <Game question={question} />
        <br></br>
          <button onClick={newQuestion} className="btn btn-light skip-btn">
            {Boolean(question) ? 'Skip' : 'Start'}
          </button>
        <br></br>
          <Answers question={question} checkAnswer={checkAnswer} />
        </div>
        </>
  );
}

export default App;