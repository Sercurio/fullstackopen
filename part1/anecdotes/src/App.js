import React, { useState } from 'react'

const Header = ({ value }) => (
    <h1>{value}</h1>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)

const Anecdote = ({ value, votes }) => (
    <div>
        { value}
        < br />
        has { votes} votes
    </div>
)

const App = () => {
    const randomNumber = (min, max) => {
        const r = Math.random() * (max - min) + min
        return Math.floor(r)
    }

    const handleNextAnecdoteClick = () => {
        setSelected(randomNumber(0, anecdotes.length))
    }

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [selected, setSelected] = useState(0)

    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

    const handleVoteAnecdoteClick = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }

    return (
        <div>
            <Header value='Anecdote of the day' />
            <Anecdote value={anecdotes[selected]} votes={points[selected]} />
            <Button handleClick={() => handleVoteAnecdoteClick()} text='vote' />
            <Button handleClick={() => handleNextAnecdoteClick()} text='next anecdote' />
            <Header value='Anecdote with most votes' />
            <Anecdote value={anecdotes[points.indexOf(Math.max(...points))]} votes={Math.max(...points)} />
        </div>
    )
}

export default App