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

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const userAnswer = e.currentTarget.value
      // Check answer against correct answer
      const correctAnswer = (question.name.common) == userAnswer;
      // Add score if answer is correct
      if (correctAnswer) {
        score++
        return 'Correct!'
        setTimeout(() => {
          (newQuestion)
        }, 2000) 
      } else {
        return 'Try again!'
      }
    }
  };

  function newQuestion () {
      const idx = Math.floor(Math.random()*questions.length)
      setQuestion(questions.splice(idx, 1)[0])
    }  

  return (
    <>
      <Header />
        <div className="items-center container">
          <Score />
        <br></br>
          <Timer />
        <br></br>
          <Game question={question} />
        <br></br>
          <button onClick={newQuestion} className="btn btn-light skip-btn">Skip</button>
        <br></br>
          <Answers />
        </div>
        </>
  );
}

export default App;