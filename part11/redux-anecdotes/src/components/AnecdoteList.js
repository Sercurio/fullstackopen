import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes
      ? state.anecdotes
          .sort((a, b) => b.votes - a.votes)
          .filter(anecdote =>
            state.filter !== ''
              ? anecdote.content
                  .toLowerCase()
                  .includes(state.filter.toLowerCase())
              : anecdote
          )
      : null
  })
  const dispatch = useDispatch()

  const vote = votedAnecdote => {
    votedAnecdote = { ...votedAnecdote, votes: votedAnecdote.votes + 1 }
    dispatch(upvoteAnecdote(votedAnecdote))
    dispatch(setNotification(`you voted ${votedAnecdote.content}`, 5))
  }

  return anecdotes.map(anecdote => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>S
      </div>
    </div>
  ))
}

export default AnecdoteList
