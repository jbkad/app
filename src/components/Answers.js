import { useState } from "react"

const Answers = ({question, checkAnswer}) => {

    const [userAnswer, setUserAnswer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const correct = checkAnswer(question, userAnswer)
        if (correct) {
            setUserAnswer('')
        }
    }

    return (<>
        <form onSubmit={handleSubmit}>
        <label className="form-label mt-4">Enter Answer:</label>
        <input
            type="text"
            className="form-control"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
        />
        <small className="form-text text-muted">No Cheating!</small>
        </form>
    </>)
}

export default Answers