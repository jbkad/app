import { useState } from "react"

const Game = ({ question }) => {

  if (question) {
    return (
      <div>
        {/* <h2>{question.name.common}</h2> */}
        <img src={question.flags.png}></img>
    </div>
    )
  }

  return (
    <>

    
    </> 
  )
}

export default Game
