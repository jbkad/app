import { useState } from "react"

const Game = ({ question }) => {

  if (question) {
    return (
      <div>
        <h2>{question.name.common}</h2>
        <img src={question.flags.png}></img>
    </div>
    )
  }

  return (<p>Click next question to start the game</p>)

}

export default Game
