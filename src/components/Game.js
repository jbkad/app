import { useState } from "react"

const Game = ({ question }) => {

  if (question) {
    return (
      <div>
        {/* <h2>{question.name.common}</h2> */}
        <img height="200" src={question.flags.png}></img>
    </div>
    )
  }

  return (
    <>
      <h2>Press start to begin</h2>
    </>
  )
}

export default Game
