import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async e => {
    e.preventDefault()
    const content = e.target.content.value
    e.target.content.value = ''
    dispatch(addAnecdote(content))
    dispatch(setNotification(`you created ${content} anecdote`, 1))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          content <input id='inputValue' name='content' />
        </div>
        <button id='inputButton' type='submit'>
          create
        </button>
      </form>
    </div>
  )
}

export default AnecdoteForm
