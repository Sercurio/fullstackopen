import React, { useState } from 'react'

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)

const Statistics = ({ good, neutral, bad, allClicks }) => {
  const average = () => {
    return ((good * 1) + (bad * -1)) / allClicks
  }

  const positiveFeedback = () => {
    return (good / allClicks) * 100
  }

  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {allClicks}</p>
      <p>average: {average()}</p>
      <p>positive: {positiveFeedback()}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAllClicks(allClicks + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAllClicks(allClicks + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAllClicks(allClicks + 1)
  }

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={() => handleGoodClick()} text="good" />
      <Button handleClick={() => handleNeutralClick()} text="neutral" />
      <Button handleClick={() => handleBadClick()} text="bad" />
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App